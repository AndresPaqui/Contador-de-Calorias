import type { Activity } from "../types"

export type ActivityState = {
    activities: Activity[],
    activeId: Activity['id']
}

export type ActivityActions = /* Type es el nombre de la actividad en este caso guaradar actividad payload son los datos que se van almacenar, newActivity es el nombre del o los datos (se hace para saber a que hcae referencia) y Activity es el tipo de dato como si fuera un int, double, etc*/
    { type: 'save-activity', payload: { newActivity: Activity } } |
    { type: 'set-activeId', payload: { id: Activity['id'] } } |
    { type: 'delete-activity', payload: { id: Activity['id'] } } |
    { type: 'reboot_activities'}

const localStorageActivities = () : Activity[] => {
    const activities = localStorage.getItem('activities')

    return activities ? JSON.parse(activities) : [];
}

export const initialState: ActivityState = {
    activities: localStorageActivities(),
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState, action: ActivityActions
) => { // state representa el estado actual a modificar, en este caso solo tenemos 1
    //ActivityState representa el tipo de state (tipo de dato) en este caso Activity[] un arreglo
    //initialState es el state a guardar en "state" esto nos permite acceder a los diferentes states definidos en initialState
    //con la propiedad state.activities para modificar dicho state

    switch (action.type) {
        case 'save-activity':

            let updatedActivities : Activity[] = []
            if(state.activeId) {
                updatedActivities = state.activities.map( activity => activity.id === state.activeId ? action.payload.newActivity : activity)

            } else {
                updatedActivities = [...state.activities, action.payload.newActivity]
            }


            return {
            ...state,
            activities: updatedActivities,
            activeId: ''
            }
        case 'set-activeId':

            return {
                ...state,
                activeId: action.payload.id
            }
        case 'delete-activity':

            return {
                ...state,
                activities: state.activities.filter(activity => activity.id !== action.payload.id)
            }
        case 'reboot_activities':

            return {
                activities: [],
                activeId: ''
            }
        default:
            return state;
    }
}

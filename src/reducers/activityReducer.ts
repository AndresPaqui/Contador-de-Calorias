import type { Activity } from "../types"

export type ActivityState = {
    activities: Activity[]
}

export type ActivityActions = /* Type es el nombre de la actividad en este caso guaradar actividad payload son los datos que se van almacenar, newActivity es el nombre del o los datos (se hace para saber a que hcae referencia) y Activity es el tipo de dato como si fuera un int, double, etc*/
    { type: 'save-activity', payload: { newActivity: Activity } }



export const initialState: ActivityState = {
    activities: []
}

export const activityReducer = (
    state: ActivityState = initialState, action: ActivityActions
) => { // state representa el estado actual a modificar, en este caso solo tenemos 1
    //ActivityState representa el tipo de state (tipo de dato) en este caso Activity[] un arreglo
    //initialState es el state a guardar en "state" esto nos permite acceder a los diferentes states definidos en initialState
    //con la propiedad state.activities para modificar dicho state

    if (action.type === 'save-activity') {
        //Este codigo se va ejecutar si save activity fue quien altero el state
        //Este codigo va manejar la logica para actualizar el state de actividades (activities[])

        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }


    }

    return state;
}

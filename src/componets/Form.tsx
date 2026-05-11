import { useEffect, useState, type ChangeEvent, type Dispatch, type SubmitEvent } from "react"
import { v4 as uuidV4 } from "uuid";
import { categories } from "../data/categories"
import type { Activity } from "../types";
import type { ActivityActions, ActivityState } from "../reducers/activityReducer";

type FormProps = { //Declaramos el type de dispatch que es un Prop (propiedad de useReduce)
    dispatch: Dispatch<ActivityActions> //Dispatch (indica que es la funcion dispatch), ActivityActions es el type que importamos desde activityReducer.ts 
    //Que contiene los types (nombres de las actividades) y payload (nombre referencial del dato alamacenar y el tipo de dato)
    state: ActivityState
}

const initialState: Activity = {
    id: uuidV4(),
    category: 1,
    activityName: '',
    calories: 0,
}

export default function Form({ dispatch, state /* Importamos dispatch y state desde el App.tsx */ }: FormProps) {
    const [activity, setActivity] = useState<Activity>(initialState);

    //Aqui se muestra como mostrar el contenido de state.activities en consola
    //donde nos toca validar que al dar al boton el cambio en el state no es instantaneo
    //Es decir si tratamos de mandar a consola el state al momento de dar click al boton
    //No hara ningun efecto, ya que el state se actualizara unos milisegundos despues
    //Se necesita un useEffect para que mande a consola cada vez que el state cambie
    //Y un if para evitar que al arrancar el programa no crahee por arreglo vacio
    /*     useEffect(() => { 
            if (state?.activities && state.activities.length > 0) {
    
                console.log(state.activities)
            }
    
        }, [state]) */

    useEffect(() => {
        if (state.activeId) {
            const selectdActivity = state.activities.filter(stateActivity => stateActivity.id === state.activeId)[0]

            setActivity(selectdActivity)
        }

    }, [state.activeId])

    const handleChange = (e: ChangeEvent<HTMLSelectElement, HTMLSelectElement> | ChangeEvent<HTMLInputElement, HTMLInputElement>) => {

        const isNumberField = ["category", "calories"].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const { activityName, calories } = activity

        return activityName.trim() !== '' && calories > 0
    }

    const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => { //Funcion para manejar el submit del formulario
        e.preventDefault(); //Evita que se recargue la pagina al dar click al boton de submit, esto es importante para evitar perder el state y que el programa funcione correctamente

        dispatch({ //Usamos el dispatch que tragimos desde App.tsx que va mandar a llamar al type de "save-activity" //que es el que se encarga de guardar la actividad en el state global
            type: 'save-activity', //Actividad a realizar //en este caso guardar la actividad
            payload: { newActivity: activity } // newActiviti el nombre, activity el nombre del state que declaramos el objeto de tipo activity //que contiene los datos a guardar en el state global, esto es lo que se va mandar al reducer para actualizar el state global
        })


        setActivity({
            ...initialState, //Reseteamos el formulario al enviar la actividad, esto es opcional pero mejora la experiencia de usuario
            id: uuidV4() //Generamos un nuevo id cada vez que se envie el formulario para evitar duplicados
        })

    }


    return (
        <form //Inicio del formulario
            className="space-y-5 bg-white shadow p-10 rounded-xl"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3"> //Categoria de la actividad Ejercicio o comida
                <label htmlFor="category" className="font-bold">Categoria: </label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white
                    outline-none focus:ring-2 focus:ring-lime-500 transition-all cursor-pointer"
                    id="category"
                    name="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >

                            {category.name}

                        </option>
                    ))}

                </select>

            </div>

            <div className="grid grid-cols-1 gap-3"> //Actividad Realizada
                <label htmlFor="activityName" className="font-bold">Actividad: </label>
                <input
                    type="text"
                    id="activityName"
                    name="activityName"
                    className="border border-slate-300 rounded-lg p-2 w-full bg-white
                    outline-none focus:ring-2 focus:ring-lime-500 transition-all cursor-pointer"
                    placeholder="Ej. Comida, Ejercicio, Jugo de Naranja Bicicleta, Ensalada, Pesas"
                    value={activity.activityName}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3"> //Calorias quemadas o sumadas, depende
                <label htmlFor="calories" className="font-bold">Calorias: </label>
                <input
                    type="number"
                    id="calories"
                    name="calories"
                    className="border border-slate-300 rounded-lg p-2 w-full bg-white
                    outline-none focus:ring-2 focus:ring-lime-500 transition-all cursor-pointer text-center "
                    placeholder="Calorias. ej. 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input //Boton para enviar el formulario
                type="submit"
                name=""
                id=""
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase 
                text-white cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                value={activity.category === 1 ? 'Guarda Comida' : 'Guaradar Ejercicio'}
                disabled={!isValidActivity()}
            />
        </form >
    )
}

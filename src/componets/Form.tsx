import { useState, type ChangeEvent } from "react"
import { categories } from "../data/categories"
import type { Activity } from "../types";

export default function Form() {
    const [activity, setActivity] = useState<Activity>({
        category: 1,
        activityName: '',
        calories: 0,
    });


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

    return (
        <form //Inicio del formulario
            className="space-y-5 bg-white shadow p-10 rounded-lg"
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
        </form>
    )
}

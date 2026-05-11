import type { Activity } from "../types";
import { categories } from "../data/categories";
import { useMemo, type Dispatch } from "react";
import { BackspaceIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import type { ActivityActions } from "../reducers/activityReducer";

type ActivityListProps = {
    activities: Activity[],
    dispatch: Dispatch<ActivityActions>
}

export default function ActivityList({ activities, dispatch }: ActivityListProps) {

    const categoryName = useMemo(() =>
        (category: Activity['category']) => (
            categories.map(cat => cat.id === category ? cat.name : '')
        ),
        [activities])

    const isEmptyActivity = useMemo(() => activities.length === 0, [activities])

    return (
        <>
            <h2 className="text-center font-bold text-4xl text-slate-600">
                Comida y Actividades
            </h2>
            {isEmptyActivity ? <p className="text-center my-5">No hay actividades aún...</p> :
                <div>
                    {activities.map(activity => (
                        <div key={activity.id} className="px-5 p-10 bg-white mt-5 flex justify-between rounded-2xl">
                            <div className="space-y-2 relative">

                                <p className={`font-bold text-xl uppercase absolute -top-8 -left-8 px-10 py-2 text-white 
                        ${activity.category === 1 ? "bg-lime-500" : "bg-orange-500"}`}>
                                    {categoryName(+activity.category)}
                                </p>

                                <p className=" text-2xl font-bold pt-5">
                                    {activity.activityName}
                                </p>

                                <p className="font-black text-4xl text-lime-500">
                                    {activity.calories} {''}
                                    <span className=" uppercase">Calorias</span>
                                </p>


                            </div>

                            <div className="flex gap-5 items-center ">
                                <button
                                    name="editActivity"
                                    className=" cursor-pointer"
                                    onClick={() => dispatch({
                                        type: "set-activeId",
                                        payload: {
                                            id: activity.id
                                        }
                                    })}
                                >
                                    <PencilSquareIcon
                                        className="h-8 w-8 text-gray-800"
                                    />
                                </button>

                                <button
                                    name="deleteActivity"
                                    className=" cursor-pointer"
                                    onClick={() => dispatch({
                                        type: "delete-activity",
                                        payload: {
                                            id: activity.id
                                        }
                                    })}

                                >
                                    <BackspaceIcon
                                        className="h-8 w-8 text-red-500"
                                    />
                                </button>

                            </div>
                        </div>
                    ))}
                </div>}
        </>
    )
}

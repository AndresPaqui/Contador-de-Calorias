import type { Activity } from "../types";
import { categories } from "../data/categories";
import { useMemo } from "react";

type ActivityListProps = {
    activities : Activity[]
}

export default function ActivityList({activities} : ActivityListProps) {

    const categoryName = useMemo(() => 
        (category : Activity['category']) =>  (
            categories.map(cat => cat.id === category ? cat.name : '')
        ),
    [activities])

  return (
    <>
        <h2 className="text-center font-bold text-4xl text-slate-600">
            Comidas y Actividades
        </h2>

        <div>
        {activities.map (activity  => (
            <div key={activity.id} className="px-5 p-10 bg-white mt-5 flex justify-between rounded-lg"> 
                <div className="space-y-2 relative">

                    <p className={`font-bold text-xl uppercase absolute -top-8 -left-8 px-10 py-2 text-white 
                        ${activity.category === 1 ? "bg-lime-500": "bg-orange-500"}`}>
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

                <div>

                </div>
            </div>
        ))}
        </div>
    </>
  )
}

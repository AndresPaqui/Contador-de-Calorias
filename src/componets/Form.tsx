import { categories } from "../data/categories"

export default function Form() {

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category">Categoria: </label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white
                    outline-none focus:ring-2 focus:ring-lime-500 transition-all cursor-pointer"
                    id="category"
                    name="category"
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
        </form>
    )
}

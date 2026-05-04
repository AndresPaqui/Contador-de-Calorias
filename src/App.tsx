import { useReducer } from "react"
import Form from "./componets/Form"
import ActivityList from "./componets/ActivityList"
import { activityReducer, initialState } from "./reducers/activityReducer"


function App() {

  //Creamos el useReducer con los parametros declarados en activityReducer, aqui solo instanciamos
  const [state, dispatch] = useReducer(activityReducer, initialState) //Creamos el useReducer, esto es lo que nos permite usarlo
  //el use reducer pide dos parametros, el primero el reducer "la funcion" por llamarla de una manera 
  //el segundo el estado incial
  //Estos dos parametros los importamos de activityReducer hacia el App.tsx para crear un estado global
  //Donde estaran las actividades guardadas y asi poder mandar desde el App.tsx el state a donde sea necesario
  //el useReducer nos da dos cosas "state" el state generado por el reducer
  //dispatch (se lo puede nombrar como se quiera se recomienda dispatch para no perder el hilo)
  //dicho dispatch es una funcion especial que nos permite llamar al useReducer para ejecutar las acciones declaradas en el reducer previo

  return (
    <>
      <header className="bg-lime-600 py-3 px-5">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>

          <button className="text-white text-lg font-bold text-center uppercase 
                            bg-lime-950 p-3 rounded-b-2xl cursor-pointer hover:bg-lime-800">
            Reiniciar
          </button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch} //pasamos la propiedad de dispatch para poder usarlo en el Form
          />
        </div>

      </section>  

      <section className="py-20 px-20 grid gap-10 max-w-4xl mx-auto">
        <div>
          <ActivityList
          
          activities ={state.activities}

          />
        </div>
      </section>
    </>
  )
}

export default App

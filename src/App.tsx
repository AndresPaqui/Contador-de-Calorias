import { useReducer, useEffect } from "react"
import Form from "./componets/Form"
import ActivityList from "./componets/ActivityList"
import { activityReducer, initialState } from "./reducers/activityReducer"


function App() {

  //Creamos el useReducer con los parametros declarados en activityReducer, aqui solo instanciamos
  const [state, dispatch] = useReducer(activityReducer, initialState) 


  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])
 
  return (
    <>
      <header className="bg-lime-600 py-3 px-5">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>

          <button 
            className="text-white text-lg font-bold text-center uppercase  
            bg-lime-950 p-3 rounded-b-2xl cursor-pointer hover:bg-lime-800"
            onClick={() => dispatch({
              type: 'reboot_activities',
              payload: {
                newActivity: state.activities
              }
            })}
          >
            Reiniciar
          </button>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch} //pasamos dispatch para poder usarlo en el Form
            state={state} //pasamos el state como prop para usarlo en el Form
          />
        </div>

      </section>

      <section className="py-20 px-20 grid gap-10 max-w-4xl mx-auto">
        <div>
          <ActivityList

            activities={state.activities}
            dispatch={dispatch}

          />
        </div>
      </section>
    </>
  )
}

export default App

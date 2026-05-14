import { useReducer, useEffect, useMemo, useRef } from "react"
import Form from "./componets/Form"
import ActivityList from "./componets/ActivityList"
import { activityReducer, initialState } from "./reducers/activityReducer"
import CalorieTracker from "./componets/CalorieTracker"


function App() {

  //Referencia 
  const formularioRef = useRef<HTMLDivElement>(null); 

  //Creamos el useReducer con los parametros declarados en activityReducer, aqui solo instanciamos
  const [state, dispatch] = useReducer(activityReducer, initialState) 

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  //Funcion scroll
  const scrollToForm = () => {
    formularioRef.current?.scrollIntoView({ behavior: 'smooth' })

    //Detectar si estamos en un dispisitivo mobile
    const isMobile = window.innerWidth < 640
    
    if (!isMobile) {
      setTimeout(() => {
        const elementToFocus = formularioRef.current?.querySelector('#activityName') as HTMLElement;
        elementToFocus?.focus();
      }, 500);
    }
  }

  const canRestarApp = () => useMemo(() => state.activities.length, [state.activities])
 
  return (
    <>
      <header className="bg-lime-600 py-3 px-5 ">
        <div className="max-w-4xl mx-auto flex justify-between items-center ">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>

          <button 
            className="text-white text-sm font-bold text-center uppercase  
            bg-lime-950 p-3 rounded-2xl cursor-pointer hover:bg-lime-800 disabled:opacity-10 disabled:cursor-not-allowed"
            disabled= {!canRestarApp()}
            onClick={() => dispatch({
              type: 'reboot_activities'
            })}
          >
            Reiniciar App
          </button>
        </div>
      </header>

      <section 
        className="bg-lime-500 py-20 px-5"
        ref={formularioRef}
      >
        <div className="max-w-4xl mx-auto">
          <Form
            dispatch={dispatch} //pasamos dispatch para poder usarlo en el Form
            state={state} //pasamos el state como prop para usarlo en el Form
          />
        </div>

      </section>

      <section className="bg-gray-800 py-10">
            <div className="max-w-4xl mx-auto">
              <CalorieTracker
                activities = {state.activities}
              />
            </div>
      </section>

      <section className="py-10 px-10 sm:py-20 sm:px-20 grid gap-10 max-w-4xl mx-auto">
        <div>
          <ActivityList

            activities= {state.activities}
            dispatch = {dispatch}
            scrollToForm = {scrollToForm}

          />
        </div>
      </section>
    </>
  )
}

export default App

import Form from "./componets/Form"


function App() {

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-2/3 mx-auto flex justify-between items-center">
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
        <div className="max-w-2/3 mx-auto">
          <Form />
        </div>

      </section>
    </>
  )
}

export default App

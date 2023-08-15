import Formulario from "../components/Formulario"

const NuevoCliente = () => {
  return (
    <div className="w-11/12 max-w-2xl mx-auto">

      <h2 className="font-extrabold text-3xl text-blue-900">Nuevo Cliente</h2>
      <p>Ahora puedes agregar un cliente</p>

      <div className="mt-10 px-5 py-10 bg-white">
        <Formulario />

        <input
          className="w-full mt-5 p-2 font-bold cursor-pointer text-white bg-blue-900"
          type="submit"
          value="Agregar Cliente"
        />
      </div>
    </div>
  )
}

export default NuevoCliente
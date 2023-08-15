
const Clientes = () => {
  return (
    <div className="w-11/12 max-w-2xl mx-auto">
      <h2 className="font-extrabold text-3xl text-blue-900">Clientes</h2>
      <p>Ahor puedes administrar a todos los clientes</p>

      <table className="w-full mt-5 shadow table-auto bg-white">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th>Clientes</th>
            <th>Contacto</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-b">
            <td className="p-1 space-y-2 sm:p-3">
              <p className="text-gray-800">Juan</p>
              <p>Juan cartoPack</p>
            </td>

            <td className="p-1 sm:p-3">
              <p className="text-gray-600"><span className="font-bold text-gray-800">Email: </span> correo@correo.com</p>
              <p className="text-gray-600"><span className="font-bold text-gray-800">Telefono: </span> 789456132</p>
            </td>

            <td className="mt-3 p-1 flex flex-col gap- justify-center sm:p-3 sm:mt-2 md:flex-row">
              <button
                type="button"
                className="text-blue-600 hover:text-blue-700 text-xs font-bold uppercase">
                Editar
              </button>

              <button
                type="submit"
                className="text-rose-600 hover:text-rose-700 text-xs font-bold uppercase">
                Eliminar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Clientes
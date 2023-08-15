import { useNavigate } from "react-router-dom";

const Cliente = ({ cliente }) => {
  const navigate = useNavigate()
  const { id, nombre, telefono, email, empresa } = cliente;

  return (
    <tr className="border-b">
      <td className="p-1 space-y-2 sm:p-3">
        <p className="text-gray-800">{nombre}</p>
        <p>Juan {empresa}</p>
      </td>

      <td className="p-1 sm:p-3">
        <p className="text-gray-600"><span className="font-bold text-gray-800">Email: </span> {email}</p>
        <p className="text-gray-600"><span className="font-bold text-gray-800">Telefono: </span> {telefono}</p>
      </td>

      <td className="mt-3 p-1 flex flex-col gap-4 justify-center sm:p-3 sm:mt-2 md:flex-row">
        <button
          type="button"
          onClick={() => navigate(`/clientes/${id}/editar`)}
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
  )
}

export default Cliente
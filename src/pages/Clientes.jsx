import Cliente from "../components/Cliente"
import { obtenerClientes } from "../api/clientes";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
  const clientes = await obtenerClientes();
  return clientes
};

const Clientes = () => {
  const clientes = useLoaderData();


  return (
    <div className="w-11/12 max-w-2xl mx-auto">
      <h2 className="font-extrabold text-3xl text-blue-900">Clientes</h2>
      <p>Ahor puedes administrar a todos los clientes</p>

      <table className="w-full mt-5 shadow table-auto bg-white md:mt-14">
        <thead className="bg-blue-800 text-white">
          <tr>
            <th>Clientes</th>
            <th>Contacto</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>

          {
            clientes.length > 0
              ?
              clientes.map((cliente) =>
                <Cliente
                  key={cliente.id}
                  cliente={cliente}
                />
              )
              :
              <p>No hay Clientes</p>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Clientes
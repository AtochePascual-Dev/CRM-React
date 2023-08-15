import { Form, useLoaderData } from "react-router-dom"
import Formulario from "../components/Formulario"
import { obtenerCliente } from "../api/clientes";

export const loader = async ({ params }) => {
  const { clienteID } = params;
  const cliente = await obtenerCliente(clienteID);
  return cliente
};


const EditarCliente = () => {
  const cliente = useLoaderData();


  return (
    <div className="w-11/12 max-w-2xl mx-auto">

      <h2 className="font-extrabold text-3xl text-blue-900">Editar Cliente</h2>
      <p>Ahora puedes editar un cliente</p>

      <div className="mt-10 px-5 py-10 bg-white">

        {/* {error && <Alerta>{error}</Alerta>} */}

        <Form
          method="POST"
          noValidate
        >
          <Formulario
            cliente={cliente}
          />

          <input
            className="w-full mt-5 p-2 font-bold cursor-pointer text-white bg-blue-900"
            type="submit"
            value="Agregar Cliente"
          />
        </Form>
      </div>
    </div>
  )
}

export default EditarCliente
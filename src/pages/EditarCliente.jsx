import { Form, redirect, useActionData, useLoaderData } from "react-router-dom"
import Formulario from "../components/Formulario"
import { editarCliente, obtenerCliente } from "../api/clientes";
import Alerta from "../components/Alerta";

export const loader = async ({ params }) => {
  const { clienteID } = params;
  const cliente = await obtenerCliente(clienteID);
  return cliente
};


export const action = async ({ request, params }) => {
  // Obtener datos del formulario
  const fromData = await request.formData();
  const cliente = Object.fromEntries(fromData);
  const email = fromData.get("email");
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const { clienteID } = params;

  // Validar datos del cliente
  if (Object.values(cliente).includes('')) {
    return 'Todos los campos son obligatorios';
  };

  // Validar email
  if (!regex.test(email)) {
    return 'Email no valido';
  };

  await editarCliente(clienteID, cliente);

  return redirect("/")
};


const EditarCliente = () => {
  const cliente = useLoaderData();
  const error = useActionData();


  return (
    <div className="w-11/12 max-w-2xl mx-auto">

      <h2 className="font-extrabold text-3xl text-blue-900">Editar Cliente</h2>
      <p>Ahora puedes editar un cliente</p>

      <div className="mt-10 px-5 py-10 bg-white">

        {error && <Alerta>{error}</Alerta>}

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
            value="Guardar Cambios"
          />
        </Form>
      </div>
    </div>
  )
}

export default EditarCliente
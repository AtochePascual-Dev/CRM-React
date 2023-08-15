import { Form, redirect, useActionData, useNavigate } from "react-router-dom"
import Formulario from "../components/Formulario"
import Alerta from "../components/Alerta";
import { registrarCliente } from "../api/clientes";

export const action = async ({ request }) => {
  // Obtener datos del formulario
  const fromData = await request.formData();
  const cliente = Object.fromEntries(fromData);
  const email = fromData.get("email");
  const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

  // Validar datos del cliente
  if (Object.values(cliente).includes('')) {
    return 'Todos los campos son obligatorios';
  };

  // Validar email
  if (!regex.test(email)) {
    return 'Email no valido';
  };

  await registrarCliente(cliente);

  return redirect("/")
};

const NuevoCliente = () => {
  const error = useActionData();
  const navigate = useNavigate();

  return (
    <div className="w-11/12 max-w-2xl mx-auto">

      <h2 className="font-extrabold text-3xl text-blue-900">Nuevo Cliente</h2>
      <p>Ahora puedes agregar un cliente</p>

      <div className="flex justify-end">
        <button
          onClick={() => navigate("/")}
          className="px-3 py-1 rounded-sm text-white bg-blue-900">
          Volver
        </button>
      </div>

      <div className="mt-10 px-5 py-10 bg-white">

        {error && <Alerta>{error}</Alerta>}

        <Form
          method="POST"
          noValidate
        >
          <Formulario />

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

export default NuevoCliente
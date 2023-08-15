const obtenerClientes = async () => {
  try {
    const respuesta = await fetch('http://localhost:3000/clientes');
    const clientes = await respuesta.json();
    return clientes

  } catch (error) {
    console.log(error);
  }
};

const registrarCliente = async (cliente) => {
  try {
    fetch('http://localhost:3000/clientes', {
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.log(error);
  }
};

export {
  obtenerClientes,
  registrarCliente
}
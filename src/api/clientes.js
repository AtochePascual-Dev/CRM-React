const obtenerClientes = async () => {
  try {
    const respuesta = await fetch('http://localhost:3000/clientes');
    const clientes = await respuesta.json();
    return clientes

  } catch (error) {
    console.log(error);
  }
};


const obtenerCliente = async (id) => {
  try {
    const respuesta = await fetch(`http://localhost:3000/clientes/${id}`);
    const cliente = await respuesta.json();
    return cliente

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


const editarCliente = async (id, cliente) => {
  try {
    fetch(`http://localhost:3000/clientes/${id}`, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.log(error);
  }
};


const eliminarCliente = async (id) => {
  try {
    fetch(`http://localhost:3000/clientes/${id}`, {
      method: 'DELETE',
    });

  } catch (error) {
    console.log(error);
  }
};

export {
  obtenerClientes,
  obtenerCliente,
  registrarCliente,
  editarCliente,
  eliminarCliente
}
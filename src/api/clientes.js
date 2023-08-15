const obtenerClientes = async () => {
  try {
    const respuesta = await fetch('http://localhost:3000/clientes');
    const clientes = await respuesta.json();
    return clientes

  } catch (error) {
    console.log(error);
  }
};

export {
  obtenerClientes
}
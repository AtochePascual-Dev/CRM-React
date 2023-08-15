import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Clientes, { loader as clientesLoader } from './pages/Clientes';
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente';
import EditarCliente, { loader as editarCalienteLoader, action as editarClienteAction } from './pages/EditarCliente';
import { action as eliminarClienteAction } from './components/Cliente';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Clientes />,
        loader: clientesLoader
      },
      {
        path: '/clientes/nuevo',
        element: <NuevoCliente />,
        action: nuevoClienteAction
      },
      {
        path: '/clientes/:clienteID/editar',
        element: <EditarCliente />,
        loader: editarCalienteLoader,
        action: editarClienteAction
      },
      {
        path: '/clientes/:clienteID/eliminar',
        action: eliminarClienteAction
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider
      router={router}
    />

  </React.StrictMode>,
)

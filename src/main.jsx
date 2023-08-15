import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Clientes, { loader as clientesLoader } from './pages/Clientes';
import NuevoCliente, { action as nuevoClienteAction } from './pages/NuevoCliente';
import EditarCliente, { loader as editarCalienteLoader } from './pages/EditarCliente';

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
        loader: editarCalienteLoader
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

import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react'
import Iconno from '../img/iconoHambur.png'
import IconoCerrar from '../img/cerrar.png'

const Header = () => {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  return (
    <header className="px-5 py-5 bg-blue-900 md:w-1/4 md:py-10">
      <div className="hidden md:block">
        <h1 className=" text-3xl font-bold text-white md:text-2xl md:mb-5 lg:text-3xl">CRM - REACT</h1>

        <nav className="flex flex-col gap-5 items-start">
          <Link
            className={`text-lg font-bold ${location.pathname === '/' ? "text-blue-300" : "text-white"} hover:text-blue-300`}
            to="/">
            Clientes
          </Link>

          <Link
            className={`text-lg font-bold ${location.pathname === '/clientes/nuevo' ? "text-blue-300" : "text-white"} hover:text-blue-300`}
            to="/clientes/nuevo">
            Nuevo Cliente
          </Link>
        </nav>
      </div>

      <div className="flex justify-end cursor-pointer md:hidden">
        <img
          onClick={() => setMenu(true)}
          src={Iconno}
          alt="icono hamburguesa" />
      </div>

      <div className={`absolute p-5 top-0 right-0 left-0 bottom-0 transition-transform duration-300 bg-blue-900 ${menu ? "-translate-y-0" : "-translate-y-full"}`}>

        <div className="h-10 flex justify-end cursor-pointer">
          <img
            onClick={() => setMenu(false)}
            src={IconoCerrar}
            alt="icono cerrar" />
        </div>

        <nav className="flex flex-col gap-5 items-start">
          <Link
            className={`text-lg font-bold ${location.pathname === '/' ? "text-blue-300" : "text-white"} hover:text-blue-300`}
            to="/">
            Clientes
          </Link>

          <Link
            className={`text-lg font-bold ${location.pathname === '/clientes/nuevo' ? "text-blue-300" : "text-white"} hover:text-blue-300`}
            to="/clientes/nuevo">
            Nuevo Cliente
          </Link>
        </nav>
      </div>

    </header>
  )
}

export default Header
import Iconno from '../img/iconoHambur.png'

const Header = () => {
  return (
    <header className="px-5 py-5 bg-blue-900 md:w-1/4 md:py-10">
      <div className="hidden md:block">
        <h1 className=" text-3xl font-bold text-white md:text-2xl md:mb-5 lg:text-3xl">CRM - REACT</h1>

        <nav className="flex flex-col gap-5 items-start">
          <a className="text-lg font-bold text-white" href="">Clientes</a>
          <a className="text-lg font-bold text-white" href="">Nuevo Cliente</a>
        </nav>
      </div>

      <div className="flex justify-end cursor-pointer md:hidden">
        <img
          src={Iconno}
          alt="icono hamburguesa" />
      </div>
    </header>
  )
}

export default Header
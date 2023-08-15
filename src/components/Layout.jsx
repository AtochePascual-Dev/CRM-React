import { Outlet } from "react-router-dom"


import Header from "./Header"

const Layout = () => {
  return (
    <div className='md:h-screen md:flex'>
      <Header />

      <main className="py-10 md:w-3/4 md:h-screen md:overflow-y-scroll">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
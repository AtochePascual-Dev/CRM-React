import React from 'react'

const Alerta = ({ children }) => {
  return (
    <div className='mb-5 p-2 text-center font-bold text-white bg-rose-800'>
      {children}
    </div>
  )
}

export default Alerta
import React from 'react'
import './NavBar.css'
import Menu from './Menu.js'
import CartWidget from './CartWidget'

const NavBar = () => {
  
  return (
    <div className='navbar'>
         <img src='https://img.freepik.com/vector-gratis/concepto-maquina-tatuaje-profesional_225004-1517.jpg?w=2000'
          alt='logo'
          className='navbar__logo' />
          Distribuidora Tattoo

      <Menu></Menu>
      <CartWidget></CartWidget>

    </div>
  )
}

export default NavBar
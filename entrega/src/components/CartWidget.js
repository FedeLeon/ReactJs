import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';

const CartWidget = () => {

    let itemsCarrito = 9

  return (
    <IconButton>
    <ShoppingCartIcon></ShoppingCartIcon>
    {itemsCarrito}
    </IconButton>
  )
}

export default CartWidget
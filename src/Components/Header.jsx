import React from 'react'
import { useCart } from '../Context/CartContext'
import "./Header.css"
function Header() {
  const {amount} = useCart()
  return (
    <header>
        <p>Shopping Application</p>
        <p>สินค้าในตะกร้า : {amount}</p>
    </header>
  )
}

export default Header
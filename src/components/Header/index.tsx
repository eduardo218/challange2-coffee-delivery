import { Actions, CartIcon, Counter, HeaderContainer, Location } from "./styles"
import Logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import { NavLink } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

const Header = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <HeaderContainer>
        <NavLink to="/"><img src={Logo} alt="Coffe Delivery" /></NavLink>

        <Actions>
            <Location><MapPin weight="fill" size={20} /> Porto Alegre, RS</Location>
            <NavLink to="/checkout">
              <CartIcon>
                <ShoppingCart weight="fill" size={20} />
                <Counter>{cartItems.length}</Counter>
              </CartIcon>
            </NavLink>
        </Actions>
    </HeaderContainer>
  )
}

export default Header
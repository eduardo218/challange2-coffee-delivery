import { Actions, CartIcon, HeaderContainer, Location } from "./styles"
import Logo from '../../assets/logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'

const Header = () => {
  return (
    <HeaderContainer>
        <img src={Logo} alt="Coffe Delivery" />

        <Actions>
            <Location><MapPin weight="fill" size={20} /> Porto Alegre, RS</Location>
            <CartIcon><ShoppingCart weight="fill" size={20} /></CartIcon>
        </Actions>
    </HeaderContainer>
  )
}

export default Header
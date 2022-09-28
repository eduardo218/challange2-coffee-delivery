import { SelectedCoffeContainer, Counter, Details, ChangeItems } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react';
import { CartContext, CartItem } from '../../contexts/CartContext';
import { useContext } from 'react';

interface SelectedCoffeeProps {
  cartItem: CartItem
}

const SelectedCoffee = ({ cartItem }: SelectedCoffeeProps) => {
  const {id, name, price, quantity, image } = cartItem
  const {removeItemFromCart, increaseQuantity, decreaseQuantity} = useContext(CartContext)

  const handleRemoveButton = () => {
    removeItemFromCart(id)
  }

  const handlePlusButton = () => {
    increaseQuantity(id)
  }

  const handleMinusButton = () => {
    decreaseQuantity(id)
  }

  return (
    <SelectedCoffeContainer>
        <img src={image} />
        

        <Details>
            <h3 className='name'>{name}</h3>
            <ChangeItems>
                <Counter>
                    <span className="change" onClick={handleMinusButton}><Minus weight="bold" /></span>
                    <span className='amount'>{quantity}</span>
                    <span className="change" onClick={handlePlusButton}><Plus weight='bold' /></span>
                </Counter>
                <span className="remove-button" onClick={handleRemoveButton}><Trash size={20} /> Remover</span>
            </ChangeItems>
            
        </Details>
        <span className='price'>R$ {(price * quantity).toFixed(2)}</span>
    </SelectedCoffeContainer>
  )
}

export default SelectedCoffee
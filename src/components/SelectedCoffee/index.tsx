import { SelectedCoffeContainer, Counter, Details, ChangeItems } from './styles'
import { Minus, Plus, Trash } from 'phosphor-react';
import { CartItem } from '../../contexts/CartContext';

interface SelectedCoffeeProps {
  cartItem: CartItem
}

const SelectedCoffee = ({ cartItem }: SelectedCoffeeProps) => {
  const {name, price, quantity, image } = cartItem
  return (
    <SelectedCoffeContainer>
        <img src={image} />
        

        <Details>
            <h3 className='name'>{name}</h3>
            <ChangeItems>
                <Counter>
                    <span className="change"><Minus weight="bold" /></span>
                    <span className='amount'>{quantity}</span>
                    <span className="change"><Plus weight='bold' /></span>
                </Counter>
                <span className="remove-button"><Trash size={20} /> Remover</span>
            </ChangeItems>
            
        </Details>
        <span className='price'>R$ {(price * quantity).toFixed(2)}</span>
    </SelectedCoffeContainer>
  )
}

export default SelectedCoffee
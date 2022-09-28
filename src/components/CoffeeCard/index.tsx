import { AddToCart, CoffeeCardContainer, Counter, Footer, TagList } from './styles'
import { Minus, Plus, ShoppingCart } from 'phosphor-react';
import { Coffee } from '../../@types/Coffee';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

interface CoffeeCardProps {
    coffee: Coffee
}

const CoffeeCard = ({coffee}: CoffeeCardProps) => {
    const {id, name, description, price, tags, image} = coffee
    const [amount, setAmount] = useState<number>(1)
    const {cartItems, addItemToCart} = useContext(CartContext)

    const handleAddItemToCart = () => {
        addItemToCart({
            id,
            name,
            price,
            quantity: amount,
            image
        })
        setAmount(1)
    }

    const handleMinusButton = () => {
        if(amount > 1) {
            setAmount(current => current - 1)
        }
    }

    const handlePlusButton = () => {
        setAmount(current => current + 1)
    }

  return (
    <CoffeeCardContainer>
        <img src={image} />
        <TagList>
            {tags.map((tag, index) => <span key={index}>{tag}</span>)}
        </TagList>
        <h3 className='name'>{name}</h3>
        <p className='description'>{description}</p>

        <Footer>
            <span className='price'>R$ <strong>{price.toFixed(2)}</strong></span>
            <AddToCart>
                <Counter>
                    <span className="change" onClick={handleMinusButton}><Minus weight="bold" /></span>
                    <span className='amount'>{amount}</span>
                    <span className="change" onClick={handlePlusButton}><Plus weight='bold' /></span>
                </Counter>
                <span className="cart-button" onClick={handleAddItemToCart}><ShoppingCart size={20} weight='fill'/></span>
            </AddToCart>
            
        </Footer>
    </CoffeeCardContainer>
  )
}

export default CoffeeCard
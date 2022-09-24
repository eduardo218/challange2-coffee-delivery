import { AddToCart, CoffeeCardContainer, Counter, Footer, TagList } from './styles'
import ExpressoTradicional from '../../assets/expresso-tradicional.svg';
import { Minus, Plus, ShoppingCart } from 'phosphor-react';

const CoffeeCard = () => {
  return (
    <CoffeeCardContainer>
        <img src={ExpressoTradicional} />
        <TagList>
            <span>TRADICIONAL</span>
        </TagList>
        <h3 className='name'>Expresso Tradicional</h3>
        <p className='description'>O tradicional café feito com água quente e grãos moídos</p>

        <Footer>
            <span className='price'>R$ <strong>9,90</strong></span>
            <AddToCart>
                <Counter>
                    <span className="change"><Plus weight="bold" /></span>
                    <span className='amount'>1</span>
                    <span className="change"><Minus weight='bold' /></span>
                </Counter>
                <span className="cart-button"><ShoppingCart size={20} weight='fill'/></span>
            </AddToCart>
            
        </Footer>
    </CoffeeCardContainer>
  )
}

export default CoffeeCard
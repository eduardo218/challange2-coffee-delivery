import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Title } from '../Form/styles'
import SelectedCoffee from '../SelectedCoffee'
import { Button, CoffeeCardContainer, TotalArea } from './styles'

const OrderCoffees = () => {
  const {cartItems} = useContext(CartContext)

  return (
    <div>
      <Title>Cafés selecionados</Title>
      <CoffeeCardContainer>
          {
            cartItems.map( cartItem => <SelectedCoffee key={cartItem.id} cartItem={cartItem} />)
          }

          <TotalArea>
            <div className='subtotal'>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </div>
            <div className='subtotal'>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>
            <div className='total'>
              <span>Total</span>
              <span>R$ 33,20</span>
            </div>
          </TotalArea>

          <Button>
            Confirmar Pedido
          </Button>

      </CoffeeCardContainer>
    </div>
  )
}

export default OrderCoffees
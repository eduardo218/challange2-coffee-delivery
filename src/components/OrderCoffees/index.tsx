import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Title } from '../Form/styles'
import SelectedCoffee from '../SelectedCoffee'
import { Button, CoffeeCardContainer, TotalArea } from './styles'

const OrderCoffees = () => {
  const {cartItems} = useContext(CartContext)
  const deliveryFee = 3.5

  const totalPrice = cartItems.reduce((acc, item) =>  acc + (item.price * item.quantity), 0)

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
              <span>R$ {totalPrice.toFixed(2)}</span>
            </div>
            <div className='subtotal'>
              <span>Entrega</span>
              <span>R$ {deliveryFee.toFixed(2)}</span>
            </div>
            <div className='total'>
              <span>Total</span>
              <span>R$ {(totalPrice + deliveryFee).toFixed(2)}</span>
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
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { Icon, Local, OrderInfo, Payment, SuccessContainer, Time } from './styles'

const Success = () => {
  return (
    <SuccessContainer>
        <div>
            <h2>Uhu! Pedido confirmado</h2>
            <h3>Agora é só aguardar que logo o café chegará até você</h3>

            <div className="wrapper">
                <OrderInfo>
                    <Local>
                        <Icon><MapPin size={16} weight='fill'/></Icon>
                        <div>
                            <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
                            <span>Farrapos - Porto Alegre, RS</span>
                        </div>
                    </Local>
                    <Time>
                        <Icon><Timer size={16} weight='fill' /></Icon>
                        <div>
                            <span>Previsão de entrega</span>
                            <span><strong>20 min - 30 min</strong></span>
                        </div>
                    </Time>
                    <Payment>
                        <Icon><CurrencyDollar size={16} /></Icon>
                        <div>
                            <span>Pagamento na entrega</span>
                            <span><strong>Cartão de Crédito</strong></span>
                        </div>
                    </Payment>
                </OrderInfo>
            </div>
        </div>
        <div className='background-container'></div>
    </SuccessContainer>
  )
}

export default Success
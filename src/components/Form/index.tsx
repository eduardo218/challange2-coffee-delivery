import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { CoffeeCardContainer, FormFields, FormHeader, PaymentContainer, PaymentHeader, PaymentOptions, Title } from './styles'

const Form = () => {
  return (
    <div>
        <Title className='title'>Complete seu pedido</Title>
        <CoffeeCardContainer>
            <FormHeader>
              <MapPin size={20} />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </FormHeader>
            <FormFields>
              <input type="text" className='cep' placeholder='CEP'/>
              <input type="text" className='rua' placeholder='Rua'/>
              <input type="text" className='numero' placeholder='Número'/>
              <input type="text" className='complemento' placeholder='Complemento'/>
              <input type="text" className='bairro' placeholder='Bairro'/>
              <span className='local'>
                <input type="text" className='cidade' placeholder='Cidade'/>
                <input type="text" className='uf' placeholder='UF'/>
              </span>
            </FormFields>
        </CoffeeCardContainer>
        <CoffeeCardContainer>
            <PaymentHeader>
              <CurrencyDollar size={20} />
              <div>
                <h3>Pagamento</h3>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </div>
            </PaymentHeader>
            <PaymentOptions>
              <span className='active'><CreditCard size={20} /> Cartão de crédito</span>
              <span><Bank size={20} /> Cartão de débito</span>
              <span><Money size={20} /> Dinheiro</span>
            </PaymentOptions>
        </CoffeeCardContainer>
    </div>
  )
}

export default Form
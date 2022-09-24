import { BannerContainer, BannerInfo, BannerItems, Item } from './styles'
import BannerSvg from '../../assets/banner-image.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

const Intro = () => {
  return (
    <BannerContainer>
        <BannerInfo>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>

            <BannerItems>
                <Item>
                    <span className='cart'><ShoppingCart weight='fill' /></span>
                    Compra simples e segura
                </Item>
                <Item>
                    <span className='package'><Package weight='fill' /></span>
                    Embalagem mantém o café intacto
                </Item>
                <Item>
                    <span className='timer'><Timer weight='fill' /></span>
                    Entrega rápida e rastreada
                </Item>
                <Item>
                    <span className='coffee'><Coffee weight='fill' /></span>
                    O café chega fresquinho até você
                </Item>
            </BannerItems>
        </BannerInfo>

        <div>
            <img src={BannerSvg} />
        </div>
    </BannerContainer>
  )
}

export default Intro
import CoffeeCard from '../CoffeeCard'
import { CoffeeList, OurCoffeesContainer } from './styles'

const OurCoffees = () => {
  return (
    <OurCoffeesContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
            <CoffeeCard />
        </CoffeeList>
    </OurCoffeesContainer>
  )
}

export default OurCoffees
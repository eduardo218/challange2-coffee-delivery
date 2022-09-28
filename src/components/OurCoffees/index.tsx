import CoffeeCard from '../CoffeeCard'
import { CoffeeList, OurCoffeesContainer } from './styles'

import data from '../../data.js'
import { useState } from 'react'
import { Coffee } from '../../@types/Coffee'



const OurCoffees = () => {
  const [coffeeList, setCoffeeList] = useState<Coffee[]>(data)
  
  return (
    <OurCoffeesContainer>
        <h2>Nossos cafés</h2>
        <CoffeeList>
            {
              coffeeList.map(coffee => <CoffeeCard key={coffee.id} coffee={coffee} />)
            }
        </CoffeeList>
    </OurCoffeesContainer>
  )
}

export default OurCoffees
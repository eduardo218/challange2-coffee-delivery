import React from 'react'
import Intro from '../../components/Intro'
import OurCoffees from '../../components/OurCoffees'
import { HomeContainer } from './styles'

const Home = () => {
  return (
    <HomeContainer>
        <Intro />
        <OurCoffees />
    </HomeContainer>
  )
}

export default Home
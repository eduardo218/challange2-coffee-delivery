import styled from "styled-components";

export const OurCoffeesContainer = styled.section`
    margin-bottom: 15.7rem;
    h2 {
        font-family: 'Baloo 2';
        font-weight: 800;
        color: ${props => props.theme["base-subtitle"]};
        font-size: 3.2rem;
        line-height: 130%;
        margin-bottom: 5.4rem;
    }
`

export const CoffeeList = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3.2rem;
`
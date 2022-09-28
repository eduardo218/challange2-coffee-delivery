import styled from "styled-components";

export const Title = styled.h2`
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.8rem;
    line-height: 130%;
    margin-bottom: 1.5rem;
`

export const CoffeeCardContainer = styled.div`
    background: ${props => props.theme["base-card"]};
    min-width: 44.8rem;
    border-radius: 6px 44px;
    padding: 4rem;

    display: flex;
    flex-direction: column;
    gap: 2.4rem;
`
export const TotalArea = styled.div`
    .subtotal, .total {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .subtotal {
        margin-bottom: 1.2rem;
        color: ${props => props.theme["base-text"]};
        line-height: 130%;

        span::first-child {
            font-size: 14px;
        }
    }

    .total {
        color: ${props => props.theme["base-subtitle"]};
        font-weight: 700;
        font-size: 2rem;
        line-height: 130%;
    }
`

export const Button = styled.button`
    display: block;
    background: ${props => props.theme["brand-yellow"]};
    color: ${props => props.theme["white"]};
    padding: 12px 8px;
    border-radius: 6px;
    border: none;
    outline: none;
    text-transform: uppercase;
    font-weight: 700;
    line-height: 160%;

    cursor: pointer;
`
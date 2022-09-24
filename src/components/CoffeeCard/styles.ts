import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background: ${props => props.theme["base-card"]};
    border-radius: 6px 36px;
    padding: 2rem;
    min-width: 256px;

    img {
        margin-top: -4rem;
        margin-bottom: 1.2rem;
    }

    h3 {
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 2rem;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
        margin-top: 1.6rem;
        margin-bottom: .8rem;
    }

    p {
        font-family: 'Roboto';
        font-size: 1.4rem;
        line-height: 130%;

        text-align: center;
        color: ${props => props.theme["base-label"]};
        margin-bottom: 3.3rem;
    }
`

export const TagList = styled.div`
    display: flex;
    gap: .4rem;

    span {
        padding: 4px 8px;
        border-radius: 100px;
        background: ${props => props.theme["brand-yellow-light"]};

        color: ${props => props.theme["brand-yellow-dark"]};
        font-weight: 700;
        font-size: 1rem;
        text-transform: uppercase;
    }
`

export const Footer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.3rem;

    .price {
        font-size: 1.4rem;
        color: ${props => props.theme["base-text"]};
        line-height: 130%;

        strong {
            font-family: 'Baloo 2';
            font-weight: 800;
            font-size: 2.4rem;
            line-height: 130%;
        }
    }
`

export const AddToCart = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    .cart-button {
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        width: 3.8rem;
        height: 3.8rem;
        background: ${props => props.theme["brand-purple-dark"]};
        color: ${props => props.theme["white"]};
        cursor: pointer;
    }
`
export const Counter = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    border-radius: 6px;
    background: ${props => props.theme["base-button"]};
    width: 7.2rem;
    height: 3.8rem;

    .amount {
        color: ${props => props.theme["base-title"]};
    }

    .change {
        background: none;
        border: none;
        color: ${props => props.theme["brand-purple"]};
        font-size: 1.4rem;
        cursor: pointer;
    }
`

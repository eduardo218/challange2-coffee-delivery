import styled from "styled-components";

export const SelectedCoffeContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 8px 4px;
    padding-bottom: 2.4rem;
    border-bottom: 1px solid ${props => props.theme["base-button"]};

    img {
        width: 6.4rem;
        height: 6.4rem;
        margin-right: 2rem;
    }

    .price {
        color: ${props => props.theme["base-text"]};
        font-weight: 700;
        line-height: 130%;
        margin-left: auto;
    }
`

export const Details = styled.div`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    .name { 
        color: ${props => props.theme["base-subtitle"]};
        line-height: 130%;
        font-weight: 400;
        font-size: 1.6rem;
    }
`

export const ChangeItems = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;

    .remove-button {
        display: flex;
        align-items: center;
        gap: .4rem;
        padding: 0 8px;
        height: 3.2rem;

        justify-content: center;
        border-radius: 6px;
        background: ${props => props.theme["base-button"]};
        color: ${props => props.theme["base-text"]};
        text-transform: uppercase;
        font-size: 1.2rem;
        line-height: 160%;
        cursor: pointer;

        svg {
        color: ${props => props.theme["brand-purple"]};
        }
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
    height: 3.2rem;

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

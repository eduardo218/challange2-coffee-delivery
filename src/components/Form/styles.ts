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
    border-radius: 6px;
    padding: 4rem;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    width: 64.4rem;
    margin-bottom: 1.2rem;
`

export const FormHeader = styled.header`
    display: flex;
    gap: .8rem;

    svg {
        color: ${props => props.theme["brand-yellow-dark"]};
    }

    h3 {
        color: ${props => props.theme["base-subtitle"]};
    }

    p {
        color: ${props => props.theme["base-text"]};
        font-size: 1.4rem;
    }
`

export const FormFields = styled.form`
    display: grid;
    gap: 1.6rem;
    grid-template-columns: repeat(3, 1fr);

    input {
        background: ${props => props.theme["base-input"]};
        border: 1px solid ${props => props.theme["base-button"]};
        border-radius: 4px;
        padding: 1.2rem;

        &.rua {
            grid-column-start: 1;
            grid-column-end: 4;
        }        

        &.complemento {
            grid-column-start: 2;
            grid-column-end: 4;
        }

        &.uf {
            grid-column-start: 2;
            grid-column-end: 4;
        }
    }

    .local {
            grid-column-start: 2;
            grid-column-end: 4;
            display: flex;
            gap: 1.6rem;

            & .cidade {
                width: 100%;
            }

            & .uf {
                width: 6rem;
            }
        }
`

export const PaymentContainer = styled.div`
`

export const PaymentHeader = styled.header`
    display: flex;
    gap: .8rem;

    svg {
        color: ${props => props.theme["brand-purple"]};
    }

    h3 {
        color: ${props => props.theme["base-subtitle"]};
    }

    p {
        color: ${props => props.theme["base-text"]};
        font-size: 1.4rem;
    }
`

export const PaymentOptions = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;

    span {
        display: flex;
        align-items: center;
        gap: 1.2rem;

        background: ${props => props.theme["base-button"]};
        color: ${props => props.theme["base-text"]};
        text-transform: uppercase;
        font-size: 1.2rem;
        line-height: 160%;

        border-radius: 6px;
        padding: 1.6rem;

        cursor: pointer;

        svg {
            color: ${props => props.theme["brand-purple"]};
        }

        &:hover {
            background: ${props => props.theme["brand-purple-light"]};
        }

        &.active {
            padding: 1.5rem;
            background: ${props => props.theme["brand-purple-light"]};
            border: 1px solid ${props => props.theme["brand-purple"]};
            cursor: default;
        }
    }
`
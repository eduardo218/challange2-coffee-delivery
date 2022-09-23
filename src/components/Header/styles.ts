import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding-block: 3.2rem;
`

export const Actions = styled.span`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`

export const Location = styled.span`
    display: flex;
    gap: .4rem;
    align-items: center;

    padding: 8px;
    border-radius: 6px;
    color: ${props => props.theme["brand-purple-dark"]};
    background: ${props => props.theme["brand-purple-light"]};

    svg {
        color: ${props => props.theme["brand-purple"]};
    }
`

export const CartIcon = styled.span`
    display: inline-block;
    border-radius: 6px;
    padding: 8px;
    background: ${props => props.theme["brand-yellow-light"]};
    color: ${props => props.theme["brand-yellow-dark"]};
    cursor: pointer;
`

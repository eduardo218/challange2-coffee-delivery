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
    height: 3.8rem;
    padding-inline: 8px;
    border-radius: 6px;
    color: ${props => props.theme["brand-purple-dark"]};
    background: ${props => props.theme["brand-purple-light"]};

    svg {
        color: ${props => props.theme["brand-purple"]};
    }
`

export const CartIcon = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 6px;
    width: 3.8rem;
    height: 3.8rem;
    background: ${props => props.theme["brand-yellow-light"]};
    color: ${props => props.theme["brand-yellow-dark"]};
    cursor: pointer;

    transition: all .2s;

    &:hover {
        background: ${props => props.theme["brand-yellow"]};
        color: ${props => props.theme["white"]};
    }
`

export const Counter = styled.span`
    position: absolute;
    top: -.7rem;
    right: -.7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 2rem;

    background: ${props => props.theme["brand-yellow-dark"]};
    color: ${props => props.theme["white"]};
    border-radius: 50%;

    font-size: 1.2rem;
    font-weight: 700;
`

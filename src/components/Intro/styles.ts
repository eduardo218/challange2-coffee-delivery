import styled from "styled-components";
import BackgroundImage from '../../assets/background.png';

export const BannerContainer = styled.section`
    display: grid;
    grid-template-columns: 58.8rem 1fr;
    padding-top: 9.4rem;
    padding-bottom: 10.8rem;
    gap: 5.6rem;
    background-image: url(${BackgroundImage});
`

export const BannerInfo = styled.div`
    h1 {
        font-size: 4.8rem;
        line-height: 130%;
        font-family: 'Baloo 2', cursive;
        font-weight: 800;

        color: ${props => props.theme["base-title"]};
    }

    p {
        font-size: 2rem;
        line-height: 130%;

        color: ${props => props.theme["base-subtitle"]};
    }
`
export const BannerItems = styled.div`
    margin-top: 6.6rem;
    display: grid;
    row-gap: 2rem;
    grid-template-columns: repeat(2, 1fr);
`
export const Item = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: ${props => props.theme["base-text"]};

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 3.2rem;
        width: 3.2rem;
        color: white;
        
        border-radius: 50%;

        &.cart {
            background-color: ${props => props.theme["brand-yellow-dark"]};
        }

        &.package {
            background-color: ${props => props.theme["base-text"]};
        }

        &.timer {
            background-color: ${props => props.theme["brand-yellow"]};
        }

        &.coffee {
            background-color: ${props => props.theme["brand-purple"]};
        }
    }
`
import styled from "styled-components";
import Background from '../../assets/Illustration.svg'

export const SuccessContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10rem;
    margin-top: 8rem;

    h2 {
        font-family: 'Baloo 2';
        font-weight: 800;
        font-size: 3.2rem;
        line-height: 130%;
        color: ${props => props.theme["brand-yellow-dark"]};
    }

    h3 {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 2rem;
        line-height: 130%;
        color: ${props => props.theme["base-subtitle"]};
    }

    .background-container {
        background: url(${Background});
        background-repeat: no-repeat;
        background-position: bottom;
    }

    .wrapper {
        margin-top: 4rem;
        background: linear-gradient(90deg, #DBAC2C, #8047F8);
        padding: 1px;
        border-radius: 6px 36px;

        & > div {
            background: ${props => props.theme["white"]};;
        }
    }
`

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 4rem;
    gap: 3.2rem;

    border-radius: 6px 36px;
`

const BaseInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 1.2rem;

    div {
        display: flex;
        flex-direction: column;

        color: ${props => props.theme["base-text"]};
        line-height: 130%;

    }
`
export const Local = styled(BaseInfo)`
    & > span {
        background: ${props => props.theme["brand-purple"]};
    }
`
export const Time = styled(BaseInfo)`
    & > span {
        background: ${props => props.theme["brand-yellow"]};
    }
`
export const Payment = styled(BaseInfo)`
    & > span {
        background: ${props => props.theme["brand-yellow-dark"]};
    }
`

export const Icon = styled.span`
    background-color: red;
    color: ${props => props.theme["white"]};

    display: flex;
    justify-content: center;
    align-items: center;

    width: 3.2rem;
    height: 3.2rem;

    border-radius: 50%;
`

import styled from "styled-components"

export const MainContainer = styled.div`
    min-height: 100vh;
    max-width: 100vw;
    background-color: var(--black);
`

export const Header = styled.div`
    min-width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    padding-top: 50px;

    img {
        height: 100px;

        margin-bottom: 20px;
    }

    h1 {
        font-size: 24px;
        color: var(--green);
        text-align: center;

        margin-bottom: 5px;

        @media (max-width: 480px) {
            font-size: 18px;
        }
    }

    a {
        text-decoration: none;
        font-size: 8px;
        color: var(--green);

        transition: 0.1s;

        &:hover {
            color: var(-darkGreen);
        }
    }
`

export const FormGroup = styled.div`
    min-width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 40px 0 50px 0;
`

export const InputText = styled.input`
    height: 50px;
    width: 45vw;

    background-color: var(--white);

    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;

    padding: 0 10px;

    font-size: 21px;

    &:focus {
        outline: none;
    }

    @media (max-width: 480px) {
        width: 55vw;
        font-size: 16px;
    }
`

export const Button = styled.button`
    height: 50px;

    background-color: var(--darkGreen);

    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;

    padding: 0 10px;

    font-size: 18px;
    color: var(--white);

    &:hover {
        opacity: 0.9;
        
        cursor: pointer;
    }
`

export const CardsDiv = styled.div`
    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    padding-bottom: 30px;

    gap: 30px;
`

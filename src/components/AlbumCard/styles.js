import styled from "styled-components"

export const Container = styled.div`
    height: 400px;
    width: 320px;

    border: 3px solid var(--white);
    border-radius: 5px;

    background-color: var(--white);

    overflow: hidden;

    /* transition: 0.1s;

    &:hover {
        background-color: var(--green);
        border-color: var(--green);

        cursor: pointer;
    } */
`

export const ImageDiv = styled.div`
    height: 320px;
    width: 320px;

    img {
        height: 320px;
        width: 320px;
    }
`

export const NameDiv = styled.div`
    height: 80px;
    max-width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 10px;

    h1 {
        font-size: 18px;
        font-weight: 600;
        color: var(--black);
        text-align: center;
    }
`
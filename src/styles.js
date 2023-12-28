import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #B6B6B6;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 70%;
    min-height: 350px;
    padding: 7px;
    background-color: #eaa29a;
    border-radius: 10px;
    border: 2px solid #341009;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
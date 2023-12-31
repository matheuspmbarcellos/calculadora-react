import styled from "styled-components";

export const InputContainer = styled.div`
    width: 100%;
    height: 100px;
    margin-bottom: 5px;
    background-color: #e07367;
    border-radius: 5px;
    border: 1px solid #330f0a;
    display: flex;
    flex-wrap: wrap;
    

    

    input {
        width: 100%;
        height: 75px;
        background-color: #e07367;
        color: #f9e1dc;
        border: 0;
        text-align: right;
        padding: 0 10px;
        font-size: 24px;
        font-famity: 'Roboto';
        border-radius: 5px;
    }

    p {       
        width: 100%;
        color: #f9e1dc;
        opacity: 0.7;
        text-align: right;
        padding: 0 10px;
        font-size: 22px;
        font-famity: 'Roboto';
    }
`
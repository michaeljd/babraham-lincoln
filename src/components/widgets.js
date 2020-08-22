import styled from "styled-components"

export const Label = styled("label")`
    font-size: 48px;
    color: #084B83;
`

export const Input = styled("input")`
    border: 0;
    background-color: #F0F6F6;
    padding: 12px;
    font-size: 36px;
    margin: 36px 0;
    outline: 0;
    color: #084B83;
`

export const Button = styled("button")`
    border: 3px solid #084B83;
    color: #084B83;
    background: none;
    font-size: 24px;
    padding: 12px;
    border-radius: 12px;
    flex: 0;
    outline: 0;

    &:disabled {
        border-color: #F0F6F6;
        color: #F0F6F6;
    }

    &:active {
        border-color: #42BFDD;
        color: #42BFDD;
    }
`

export const Form = styled('form')`
    justify-content: center;
    display: flex;
    flex-direction: column;
    padding: 24px;
    flex: 1;
`
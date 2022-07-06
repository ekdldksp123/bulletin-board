import styled from "@emotion/styled";

export const Input = styled.input`
    width: 100%;
    height: 45px;
    transition: background-color 0.2s ease 0s;
    background: repeat scroll 0 0 transparent;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    line-height: 1rem;
    padding: 5px 8px 5px 25px;
    background-color: #F5F5F5;
    box-sizing: border-box;
    margin-bottom: 25px;
    font-family: inherit;

    &:focus {
        background: none repeat scroll 0 0 f5f5f5;
        border-color: #f5f5f5;
        outline-color: #616161;
        color: #616161;
        font-weight: bold;

        &::placeholder {
            color: #616161;
            font-weight: bold;
        }
    }

    &::placeholder {
        color: #616161;
        font-weight: bold;
    }

    &:required {
        background-color: rgb(232, 240, 254);
    }
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 180px;
    transition: background-color 0.2s ease 0s;
    background: repeat scroll 0 0 transparent;
    border-radius: 10px;
    border: none;
    font-size: 1rem;
    line-height: 1rem;
    padding: 25px;
    background-color: #F5F5F5;
    box-sizing: border-box;
    margin-bottom: 25px;
    font-family: inherit;

    &:focus {
        background: none repeat scroll 0 0 f5f5f5;
        border-color: #f5f5f5;
        outline-color: #616161;
        color: #616161;
        font-weight: bold;

        &::placeholder {
            color: #616161;
            font-weight: bold;
        }
    }

    &::placeholder {
        color: #616161;
        font-weight: bold;
    }

    &:required {
        background-color: rgb(232, 240, 254);
    }
`
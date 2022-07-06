import styled from "@emotion/styled";

export const PrimaryButton = styled.button`
    width: 100px;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    height: 50px;
    text-align:center;
    border: none;
    background-size: 300% 100%;

    border-radius: 30px;
    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);

    &:hover {
        background-position: 100% 0;
        moz-transition: all .4s ease-in-out;
        -o-transition: all .4s ease-in-out;
        -webkit-transition: all .4s ease-in-out;
        transition: all .4s ease-in-out;
    }
`

export const ConfirmButton = styled.button`
    outline:none;
    height: 40px;
    botton: 0;
    text-align: center;
    width: 130px;
    border-radius:40px;
    background: #fff;
    border: 2px solid #1ECD97;
    color:#1ECD97;
    letter-spacing:1px;
    text-shadow:0;
    font:{
        size:12px;
        weight:bold;
    }
    cursor: pointer;
    transition: all 0.25s ease;
    &:hover {
        color:white;
        background: #1ECD97;
    }
    &:active {
        letter-spacing: 2px ;
    }
    &:after {
        content:"CONFIRM";
    }
`

export const CloseButton = styled.a`
    color: white;
    text-decoration: none;
`
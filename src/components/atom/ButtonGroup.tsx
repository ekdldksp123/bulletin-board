import styled from "@emotion/styled";

export const PrimaryButton = styled.button`
    width: 100px;
    height: 50px;

    font-size: 16px;
    font-weight: 600;
    text-align:center;
    color: #fff;
    cursor: pointer;
    
    background-size: 300% 100%;

    border: none;
    border-radius: 30px;
    background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
    box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);

    moz-transition: all .4s ease-in-out;
    -o-transition: all .4s ease-in-out;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;

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
    width: 130px;
    height: 40px;
    margin: 10px;

    text-align: center;
    text-shadow:0;
    letter-spacing:1px;
    color:#1ECD97;
    
    border-radius:40px;
    background: #fff;
    border: 2px solid #1ECD97;
    
    font-size: 12px;
    font-weight: bold;
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

export const CancelButton = styled.button`
    outline:none;
    width: 130px;
    height: 40px;
    margin: 10px;

    text-align: center;
    text-shadow:0;
    letter-spacing:1px;
    color:#FB4D4C;
    
    border-radius:40px;
    background: #fff;
    border: 2px solid #FB4D4C;
    
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;

    transition: all 0.25s ease;    

    &:hover {
        color:white;
        background: #FB4D4C;
    }
    &:active {
        letter-spacing: 2px ;
    }
    &:after {
        content:"CANCEL";
    }
`

export const CloseButton = styled.a`
    color: white;
    text-decoration: none;
`
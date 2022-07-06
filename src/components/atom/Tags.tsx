import styled from "@emotion/styled";

export const Tags = styled.ul`
    list-style: none;
    margin: 0;
    overflow: hidden; 
    padding: 0;

    & li {
        float: left; 
    }

    & .tag {
        background: #fff;
        border-radius: 25px;
        color: #252525;
        display: inline-block;
        height: 28px;
        line-height: 26px;
        padding: 0 20px 0 23px;
        position: relative;
        margin-right: 10px;
        text-decoration: none;
    }
`


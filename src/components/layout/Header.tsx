import styled from "@emotion/styled";
import { HeaderProps } from "../../types/header";
import { PrimaryButton } from "../atom/ButtonGroup";

const StyledHeader = styled.header`
    width: 100vw;
    padding: 20px;
    -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    -o-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);

    & h1 {
        color: #435d5b;
        margin: 0;
        float: left;
        top: 50%;
    }
    & button {
        float: right;
    }
`

const Header:React.FC<HeaderProps> = ({title, buttons}) => {
    return (
        <StyledHeader>
            <h1>{title}</h1>
            {buttons?.map((v,i) => 
                <PrimaryButton key={`btn-${i}`} onClick={() => v.onClickHandler()}>
                    {v.name}
                </PrimaryButton>)
            }
        </StyledHeader>
    )
}

export default Header;




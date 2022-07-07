import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { HeaderProps } from "../../types/header";
import { MainButton } from "../atom/ButtonGroup";

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
    }
    & button {
        float: right;
    }
`

const Header:React.FC<HeaderProps> = ({title, buttons}) => {
    const router = useRouter()
    return (
        <StyledHeader>
            <h1 id='title' onClick={() => router.push('/')}>{title}</h1>
            {buttons!.length > 0 && buttons?.map((v,i) => 
            <MainButton key={`btn-${i}`} onClick={() => v.onClickHandler()}>
                {v.name}
            </MainButton>)
            }
        </StyledHeader>
    )
}

export default Header;




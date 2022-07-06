import styled from "@emotion/styled";

export const StyledModalBody = styled.div`
    padding-top: 25px;
    text-align: center;
    font-size: 20px;
    color: #808080;
    width: 100%;
    height: 80%;
`;

export const StyledModalHeader = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 15px 25px 15px 25px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
    background-color: #1ECD97;
    font-size: 25px;
`;

export const StyledModal = styled.div`
    display: flex;
    overflow-y: auto !important;
    flex-direction: column;
    background: white;
    width: 550px;
    height: 65%;
    border-radius: 25px;
    padding-bottom: 20px;
`;

export const StyledPopup = styled.div`
    display: flex;
    overflow-y: auto !important;
    flex-direction: column;
    background: white;
    width: 550px;
    height: 30%;
    border-radius: 25px;
    padding-bottom: 20px;
`;

export const StyledModalTitle = styled.div`
    display: relative;
    margin: 0 auto;
    padding-top: 5px;
    font-size: 20px;
    font-weight: bold;
    color: white;
`
export const StyledModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModalFooter = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
import { useEffect } from 'react';
import { ModalProps } from '../../types/modal';
import { CloseButton, ConfirmButton } from '../atom/ButtonGroup';
import { StyledModal, StyledModalBody, StyledModalFooter, StyledModalHeader, StyledModalOverlay, StyledModalTitle } from '../atom/Modal';
import { Portal } from '../atom/Portal';

/**
 * 
 * @author vinchaekim
 * @param ModalProps { toggle, onClose, title, content}
 * @since 2022.07.07
 * popup modal portal 에 띄우기
 * 
 */

const Modal: React.FC<ModalProps> = ({ toggle, onClose, title, content }) => {

    return toggle ? (
        <StyledModalOverlay onClick={() => onClose()}>
            <StyledModal>
                <StyledModalHeader>
                    <CloseButton href="#" onClick={() => onClose()}>x</CloseButton>
                    <StyledModalTitle>{title}</StyledModalTitle>
                </StyledModalHeader>
                <StyledModalBody>{content}</StyledModalBody>
                <StyledModalFooter>
                    <ConfirmButton />
                </StyledModalFooter>
            </StyledModal>
        </StyledModalOverlay>
    ) : <></>;
}

const PopupModal:React.FC<ModalProps> = (props) => {
    //popup시 scroll 동작 막기(web, mobile 모두)
    useEffect(() => {
        if(props.toggle) document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
        else document.body.style.cssText = '';
    }, [props.toggle]);

    return <Portal elementId='portal' child={ <Modal {...props}/> }/>
}

export default PopupModal






import { MouseEvent, useEffect, useState } from 'react';
import { usePost, useToggle } from '../../libs/store.module';
import { AddPost, Post } from '../../types/post';
import { CancelButton, CloseButton, ConfirmButton } from '../atom/ButtonGroup';
import { StyledModal, StyledModalBody, StyledModalFooter, StyledModalHeader, StyledModalOverlay, StyledModalTitle } from '../atom/Modal';
import { Portal } from '../atom/Portal';
import { PostForm } from './FormGroup';

/**
 * 
 * @author vinchaekim
 * @description popup modal portal 에 띄우기
 * @since 2022.07.07
 * 
 */

const Modal: React.FC = () => {
    const { toggle, onClick } = useToggle()
    const { title, post } = usePost()

    const [ form, setForm ] = useState<Post | AddPost<Post>>({...post});

    return toggle ? (
        <StyledModalOverlay>
            <StyledModal className='modal'>
                <StyledModalHeader className='modal-header'>
                    <CloseButton href="#" onClick={() => onClick()}>x</CloseButton>
                    <StyledModalTitle>{title}</StyledModalTitle>
                </StyledModalHeader>
                <StyledModalBody className='modal-body'>
                    <PostForm/>
                </StyledModalBody>
                <StyledModalFooter className='modal-footer'>
                    <ConfirmButton />
                    <CancelButton />
                </StyledModalFooter>
            </StyledModal>
        </StyledModalOverlay>
    ) : <></>;
}

export const FormModal:React.FC = () => {

    const { toggle } = useToggle(); 
    
    useEffect(() => {
        if(toggle) {
            //popup시 scroll 동작 막기(web, mobile 모두)
            document.body.style.cssText = `position: fixed; top: -${window.scrollY}px`
        } else document.body.style.cssText = '';
    }, [toggle]);

    return <Portal elementId='portal' child={ <Modal/> }/>
}







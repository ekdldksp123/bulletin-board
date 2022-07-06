import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import { useModal, usePost, useToggle } from '../../libs/store.module';
import { AddPost, Post } from '../../types/post';
import { CancelButton, CloseButton, ConfirmButton } from '../atom/ButtonGroup';
import { StyledModal, StyledModalBody, StyledModalFooter, StyledModalHeader, StyledModalOverlay, StyledModalTitle, StyledPopup } from '../atom/Modal';
import { Portal } from '../atom/Portal';
import { PostForm } from './FormGroup';

/**
 * 
 * @author vinchaekim
 * @description popup modal portal 에 띄우기
 * @since 2022.07.07
 * 
 */

export const FormModal: React.FC = () => {
    const { toggle, onClick } = useToggle()
    const { title, post } = usePost()

    const [ form, setForm ] = useState<Post | AddPost<Post>>({...post});

    return toggle ? (
        <StyledModalOverlay>
            <StyledModal>
                <StyledModalHeader>
                    <CloseButton href="#" onClick={() => onClick()}>x</CloseButton>
                    <StyledModalTitle>{title}</StyledModalTitle>
                </StyledModalHeader>
                <StyledModalBody>
                    <PostForm/>
                </StyledModalBody>
                <StyledModalFooter>
                    <ConfirmButton />
                    <CancelButton />
                </StyledModalFooter>
            </StyledModal>
        </StyledModalOverlay>
    ) : <></>;
}

export const ConfirmModal: React.FC = () => {

    const { title, content } = useModal()
    
    const { toggle, onClick } = useToggle()
    return toggle ? (
        <StyledModalOverlay>
            <StyledPopup>
                <StyledModalHeader>
                    <CloseButton href="#" onClick={() => onClick()}>x</CloseButton>
                    <StyledModalTitle>{title}</StyledModalTitle>
                </StyledModalHeader>
                <StyledModalBody>
                    {content}
                </StyledModalBody>
                <StyledModalFooter>
                    <ConfirmButton />
                    <CancelButton onClick={ () => onClick() }/>
                </StyledModalFooter>
            </StyledPopup>
        </StyledModalOverlay>
    ) : <></>;
}








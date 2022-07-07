import { useRouter } from 'next/router';
import { onSubmitHandler } from '../../libs/post.module';
import { useConfirm, usePost, useToggle } from '../../libs/store.module';
import { Post } from '../../types/post';
import { CancelButton, CloseButton, ConfirmButton } from '../atom/ButtonGroup';
import { StyledModal, StyledModalBody, StyledModalFooter, StyledModalHeader, StyledModalOverlay, StyledModalTitle, StyledPopup } from '../atom/Modal';
import { PostForm } from './FormGroup';

/**
 * 
 * @author vinchaekim
 * @description atomic modal group
 * @since 2022.07.07
 * 
 */

export const FormModal: React.FC = () => {
    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
    }
    const { title, post } = usePost()
    const { toggle, onClick } = useToggle()
    
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
                    <ConfirmButton onClick={() => onSubmitHandler(post as Post, [refreshData, onClick])}/>
                    <CancelButton onClick={() => onClick()}/>
                </StyledModalFooter>
            </StyledModal>
        </StyledModalOverlay>
    ) : <></>;
}

export const ConfirmModal: React.FC = () => {

    const { caption, message, onConfirm } = useConfirm()
    const { toggle, onClick } = useToggle()

    return toggle ? (
        <StyledModalOverlay>
            <StyledPopup>
                <StyledModalHeader>
                    <CloseButton href="#" onClick={() => onClick()}>x</CloseButton>
                    <StyledModalTitle>{caption}</StyledModalTitle>
                </StyledModalHeader>
                <StyledModalBody>
                    {message}
                </StyledModalBody>
                <StyledModalFooter>
                    <ConfirmButton onClick={ ()=> onConfirm() }/>
                    <CancelButton onClick={ () => onClick() }/>
                </StyledModalFooter>
            </StyledPopup>
        </StyledModalOverlay>
    ) : <></>;
}








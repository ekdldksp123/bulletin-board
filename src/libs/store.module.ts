import { AddPost, Post } from './../types/post';
import { Popup, FormModalContent, ModalType, ConfirmType } from './../types/store';
import create from 'zustand';
import { getPostById } from './api.module';

/**
 * @author vinchaekim
 * @description zustand 를 사용한 Provider, Consumer 전역 상태 관리
 */

// portal 에 팝업을 띄울지 관리
export const useToggle = create<Popup>((set) => ({
    toggle: false,
    onClick: () => set((state: Popup) => ({ toggle: !state.toggle })),
}))

const newPost: AddPost<Post> = {}
const getPost = (id?:number) => {
    if(!id) return newPost;

    const post = getPostById(id);
    return JSON.parse(JSON.stringify(post)) as Post;
}

// post 를 add 할지 update 할지
export const usePost = create<FormModalContent>((set) => ({
    title: undefined,
    post: newPost,
    setTitle: (title:string) => set({ title: title}),
    setPost: (id?: number) => set({ post: getPost(id) })
}))

// modal 타입 구분 form | confirm
export const useModal = create<ModalType>((set) => ({
    type: undefined,
    setType: (type:'form' | 'confirm') => set({ type: type}),
}))

// confirm 모달 내용 관리
export const useConfirm = create<ConfirmType>((set) => ({
    caption: undefined,
    message: undefined,
    setCaption: (caption:string) => set({ caption: caption }),
    setMessage: (message:string) => set({ message: message }),
}))
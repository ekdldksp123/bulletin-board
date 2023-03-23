import { AddPost, Post } from './../types/post';
import { Popup, FormModal, ModalType, ConfirmType } from './../types/store';
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
}));

const newPost: AddPost<Post> = {};

// post 를 add 할지 update 할지
export const usePost = create<FormModal>((set) => ({
  title: undefined,
  post: newPost,
  onSubmit: () => {},
  setTitle: (title: string) => set({ title: title }),
  setPost: (post?: Post | AddPost<Post>) => set({ post: post ? post : newPost }),
  setOnSubmit: (onSubmitHandler: Function, post: Post | AddPost<Post>) =>
    set({ onSubmit: () => onSubmitHandler(post) }),
}));

// modal 타입 구분 form | confirm
export const useModal = create<ModalType>((set) => ({
  type: undefined,
  setType: (type: 'form' | 'confirm') => set({ type: type }),
}));

// confirm 모달 내용 및 콜백 관리
export const useConfirm = create<ConfirmType>((set) => ({
  caption: undefined,
  message: undefined,
  onConfirm: () => {},
  setCaption: (caption: string) => set({ caption: caption }),
  setMessage: (message: string) => set({ message: message }),
  setOnConfirm: (onConfirmHandler: Function, props: string) => set({ onConfirm: () => onConfirmHandler(props) }),
}));

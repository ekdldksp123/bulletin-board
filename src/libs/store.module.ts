import { AddPost, Post } from './../types/post';
import { Popup, ModalContent } from './../types/store';
import create from 'zustand';
import { getPostById } from './api.module';

/**
 * @author vinchaekim
 * @description zustand 를 사용한 Provider, Consumer 전역 상태 관리
 */

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

export const usePost = create<ModalContent>((set) => ({
    title: undefined,
    post: undefined,
    setTitle: (title:string) => set({ title: title}),
    setPost: (id?: number) => set({ post: getPost(id) })
}))
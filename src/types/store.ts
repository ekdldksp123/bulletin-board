import { Post, AddPost } from './post';

export type Popup = {
    toggle: boolean;
    onClick: () => void;
};

export type ModalContent = {
    title?: string;
    post: Post | AddPost<Post>;
    setTitle: (title: string) => void;
    setPost: (id?: number) => void;
};

export type ModalType = {
    type?: string;
    title?: string;
    content?: string;
    setType: (type: 'form' | 'confirm') => void;
    setTitle: (title: string) => void;
    setContent: (content: string) => void;
}

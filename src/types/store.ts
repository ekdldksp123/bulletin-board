import { Post, AddPost } from './post';

export type Popup = {
    toggle: boolean;
    onClick: () => void;
};

export type FormModalContent = {
    title?: string;
    post: Post | AddPost<Post>;
    setTitle: (title: string) => void;
    setPost: (id?: number) => void;
};

export type ModalType = {
    type?: string;
    setType: (type: 'form' | 'confirm') => void;
}

export type ConfirmType = {
    caption?: string;
    message?: string;
    onConfirm: Function;
    setCaption: (caption: string) => void;
    setMessage: (message: string) => void;
    setOnConfirm: (onConfirm: Function, props: string) => void;
}




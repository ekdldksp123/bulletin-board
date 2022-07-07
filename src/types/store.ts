import { Post, AddPost } from './post';

export type Popup = {
    toggle: boolean;
    onClick: () => void;
};

export type FormModal = {
    title?: string;
    post: Post | AddPost<Post>;
    onSubmit: Function;
    setTitle: (title: string) => void;
    setPost: (post?: Post) => void;
    setOnSubmit: (onSubmitHandler: Function, post: Post | AddPost<Post>) => void;
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




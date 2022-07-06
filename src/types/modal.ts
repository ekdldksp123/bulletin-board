import { Post } from "./post"

export interface ModalProps {
    toggle: boolean,
    onClose: () => void,
    title: string,
    props?: Post
}

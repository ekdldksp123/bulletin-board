
export interface HeaderProps {
    title: string;
    buttons?: HeaderButtonProps[]
}

export interface HeaderButtonProps {
    name: string;
    onClickHandler: () => void;
}
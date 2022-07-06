import { useRouter } from "next/router";
import React from "react";
import { deletePost } from "../../libs/api.module";
import { useConfirm, useModal, usePost, useToggle } from "../../libs/store.module";
import { Posts } from "../../types/post"
import { Card } from "../atom/Card";
import { Tags } from "../atom/Tags";

const CardList: React.FC<Posts> = ({list}) => {

    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
    }
    
    const { setTitle, setPost } = usePost()
    const { onClick } = useToggle()
    const { setType } = useModal()
    const { setCaption, setMessage, setOnConfirm } = useConfirm()

    const onEditClick = () => {
        setType('form')
        setTitle("Edit Item")
        setPost()
        onClick()
    }

    const onDeleteHandler = async (id:string) => {
        const res = await deletePost(id)
        if(res === 'success') refreshData()
        onClick()
    }

    const onDeleteClick = (id: string, title: string) => {
        setType('confirm')
        setCaption('Delete Item')
        setMessage(`"${title}" 이 글을 삭제하시겠습니까?`)
        setOnConfirm(onDeleteHandler, id)
        onClick()
    }

    return (
        <>
            {list.length > 0 && list.map((v,i) => (
                <Card key={`post-${i}`}>
                    <article className="card-content">
                        <h2 className="card-title">{v.title}</h2>
                        <Tags>
                            {v.tags.length > 0 && v.tags.map((tag, i) => (
                                <li key={`tag-${i}`}>
                                    <span className="tag">{tag}</span>
                                </li>
                            ))}
                        </Tags>
                        <section className="card-text">{v.description}</section>
                    </article>
                    <section key={`footer-group-${i}`} className="card-link">
                        <section className="button-group">
                            <a className="link-btn" onClick={() => onEditClick()}>Edit</a>
                            <a className="link-btn" onClick={() => onDeleteClick(v.id, v.title)}>Delete</a>
                        </section>
                        <span className="createdAt">{v.createdAt}</span>
                    </section>
                </Card>
            ))}
        </>
    )
}

export default CardList;


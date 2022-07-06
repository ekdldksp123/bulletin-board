import React from "react";
import { usePost, useToggle } from "../../libs/store.module";
import { Posts } from "../../types/post"
import { Card } from "../atom/Card";
import { Tags } from "../atom/Tags";

const CardList: React.FC<Posts> = ({list}) => {

    const { setTitle, setPost } = usePost()
    const { onClick } = useToggle()

    const onEditClick = () => {
        setTitle("Edit Item")
        setPost()
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
                            <a className="link-btn">Delete</a>
                        </section>
                        <span className="createdAt">{v.createdAt}</span>
                    </section>
                </Card>
            ))}
        </>
    )
}

export default CardList;


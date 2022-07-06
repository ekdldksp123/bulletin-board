import { listenerCount } from "process";
import React from "react";
import { HeaderButtonProps } from "../../types/header";
import { Post } from "../../types/post";
import { Card } from "../atom/Card";
import { Tags } from "../atom/Tags";
import { ContainerCenter } from "../layout/ContainerGroup";
import Header from "../layout/Header";

interface Props {
    list: Post[]
}

const Posts: React.FC<Props> = ({list}) => {

    const buttonProps: HeaderButtonProps[] = [
        { name: "Add", onClickHandler: () => {} }
    ]

    return (
        <ContainerCenter>
            <Header title="Law&Good List" buttons={[...buttonProps]}/>
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
                        <p className="card-text">{v.description}</p>
                    </article>
                    <section className="card-link">
                        <a className="link-btn">Edit</a>
                        <a className="link-btn">Delete</a>
                    </section>
                </Card>
            ))}
        </ContainerCenter>
    )
}

export default Posts;
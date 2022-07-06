import React, { useEffect, useState } from "react";
import { HeaderButtonProps } from "../../types/header";
import { Post } from "../../types/post";
import { Card } from "../atom/Card";
import { Tags } from "../atom/Tags";
import { ContainerCenter } from "../layout/ContainerGroup";
import Header from "../layout/Header";
import PopupModal from "../molecules/Popup";

interface Props {
    list: Post[]
}

const Posts: React.FC<Props> = ({list}) => {

    const [ modalProps, setModalProps ] = useState<Object>({})

    const onClick = () => {
    }

    const buttonProps: HeaderButtonProps[] = [
        { name: "Add", onClickHandler: () => onClick() }
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
                    <section key={`btn-group-${i}`} className="card-link">
                        <a className="link-btn" onClick={() => console.log('edit')}>Edit</a>
                        <a className="link-btn">Delete</a>
                    </section>
                </Card>
            ))}
            
        </ContainerCenter>
    )
}

export default Posts;
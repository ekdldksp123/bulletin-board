import { useRouter } from "next/router";
import React from "react";
import { deletePost } from "../../libs/api.module";
import { useConfirm, useModal, usePost, useToggle } from "../../libs/store.module";
import { DetailProps, Post as PostValue } from "../../types/post";
import { PrimaryButton, SecondaryButton } from "../atom/ButtonGroup";
import { CreatedDate, Description, PostContainer, PostFooter, PostWrapper, TagBox, TagsAndDate, Title } from "../atom/PostGroup";
import { TagItem } from "../atom/Tags";

const Post:React.FC<DetailProps> = ({post}) => {

    const router = useRouter();
    const refreshData = () => {
        router.replace(router.asPath);
    }

    const { setTitle, setPost } = usePost()
    const { toggle, onClick } = useToggle()
    const { setType } = useModal()
    const { setCaption, setMessage, setOnConfirm } = useConfirm()

    const onEditClick = (post:PostValue) => {
        setType('form')
        setTitle("Edit Item")
        setPost(post)
        onClick()
    }

    const onDeleteHandler = async (id:string) => {
        const res = await deletePost(id)
        if(res === 'success') router.push('/')
        onClick()
    }

    const onDeleteClick = (id: string, title: string) => {
        console.log(toggle)
        setType('confirm')
        setCaption('Delete Item')
        setMessage(`"${title}" 이 글을 삭제하시겠습니까?`)
        setOnConfirm(onDeleteHandler, id)
        onClick()
    }

    return (
        <PostContainer>
            <PostWrapper>
                <Title id="title">{post.title}</Title>
                <TagsAndDate>
                    <TagBox>
                        {post.tags?.length > 0 && post.tags.map((v,i) => (
                            <TagItem  key={`key-${i}`}>{v}</TagItem>
                        ))}
                    </TagBox>
                    <CreatedDate>
                        <span>{post.createdAt}</span>
                    </CreatedDate>
                </TagsAndDate>
                <Description>{post.description}</Description>
            </PostWrapper>
            <PostFooter>
                <PrimaryButton onClick={ () => onEditClick(post)}>Edit</PrimaryButton>
                <SecondaryButton onClick={ () => onDeleteClick(post.id, post.title)}>Delete</SecondaryButton>
            </PostFooter>
        </PostContainer>
    )
}

export default Post;
import React from "react";
import { DetailProps } from "../../types/post";
import { CreatedDate, Description, PostContainer, PostWrapper, TagBox, TagsAndDate, Title } from "../atom/PostGroup";
import { TagItem } from "../atom/Tags";

const Post:React.FC<DetailProps> = ({post}) => {

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
        </PostContainer>
    )
}

export default Post;
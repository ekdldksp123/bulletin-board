import React from "react";
import { DetailProps } from "../../types/post";
import Post from "../molecules/Post";

const DetailView:React.FC<DetailProps> = ({post}) => {
    console.log(post)
    return (
        <>
            <Post post={post}/>
        </>
    )
}

export default DetailView;
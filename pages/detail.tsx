
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import DetailView from "../src/components/view/Detail";
import { getPostById } from "../src/libs/api.module";
import { Post } from "../src/types/post";

const Detail: NextPage = () => {
    const router = useRouter();
    
    const [post, setPost] = useState<Post>({ 
        id: '',
        title:'', 
        description:'',
        tags: [],
        createdAt:''
    });

    const getPost = async () => {
        const data = await getPostById(router.query.id as string)
        setPost({...data})
    }
    useEffect(() => {
        getPost()
    }, [])

    return <DetailView post={post}/>
}

export default Detail;



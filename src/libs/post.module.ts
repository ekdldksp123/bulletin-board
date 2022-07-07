import { Post, AddPost } from './../types/post';
import { addPost, editPost } from './api.module';
import { formatDateToString } from './date.utils';

export const uploadPost = async (post: AddPost<Post>) => {
    if(!post.title) alert('Please write a title')
    else if(!post.description) alert('Please write a description')
    else {
        post.createdAt = formatDateToString(new Date())
        return await addPost(post)
    }
}

export const updatePost = async (post: Post) => {
    if(!post.title) alert('Please write a title')
    else if(!post.description) alert('Please write a description')
    else {
        return await editPost(post)
    }
}
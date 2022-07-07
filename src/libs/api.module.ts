import { AddPost } from './../types/post';
import axios from 'axios';
import { Post } from '../types/post';

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

const POST = '/posts';

export const getPosts = async (callback: Function) => {
  return await api.get(POST)
    .then((res) => callback(res.data))
    .catch((err) => err);
};

export const getPostById = async (id:number) => {
  return await api.get(POST)
    .then((res) => res.data)
    .catch((err) => err)
};

export const addPost = async (newPost: AddPost<Post>) => {
  await api.post(POST, newPost)
};

export const editPost = async (newPost: Post) => {
  await api.patch(POST, newPost)
};

export const deletePost = async (id: string) => {
  return await api.delete(`${POST}/${id}`)
    .then((res) => 'success')
    .catch((err) => 'error')
}

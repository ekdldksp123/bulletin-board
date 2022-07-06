import axios from 'axios';
import { Post } from '../types/post';

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

const POST = '/posts';

export const getPosts = async () => {
  return await api.get(POST)
    .then((res) => res.data)
    .catch((err) => err);
};

export const addPost = async (newPost: Post) => {
  await api.post(POST, newPost);
};

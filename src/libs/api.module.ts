import axios from 'axios';
import { Post } from '../types/post';

const api = axios.create({
  baseURL: 'http://localhost:3003',
});

const POST = '/posts';

export const getPost = async () => {
  return await api.get(POST);
};

export const addPost = async (newPost: Post) => {
  await api.post(POST, newPost);
};

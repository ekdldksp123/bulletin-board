import { Post, AddPost } from './../types/post';
import { addPost, editPost } from './api.module';
import { formatDateToString } from './date.utils';

export const uploadPost = async (post: AddPost<Post>) => {
  if (!post.title) alert('Please write a title');
  else if (!post.description) alert('Please write a description');
  else {
    post.createdAt = formatDateToString(new Date());
    return await addPost(post);
  }
};

export const updatePost = async (post: Post) => {
  if (!post.title) alert('Please write a title');
  else if (!post.description) alert('Please write a description');
  else {
    return await editPost(post);
  }
};

export const onSubmitHandler = async (post: Post, callback: Function[]) => {
  console.dir(callback);
  if (!post.id) {
    // add mode
    await uploadPost(post)
      .then(() => callback[0]())
      .then(() => callback[1]());
  } else {
    // edit mode
    await updatePost(post as Post)
      .then(() => callback[0]())
      .then(() => callback[1]());
  }
};

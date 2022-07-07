import { Post } from '../src/types/post';
import { getPosts, editPost, getPostById, deletePost } from '../src/libs/api.module';
export {};
/**
 * @author vinchaekim
 * @description post api intergration 테스트
 */

const fs = require('fs');

describe('UnitTest : getPost ', () => {
  test('getAllPost', async () => {
    const jsonData = fs.readFile('./todos.json', 'utf8', (error: Error, jsonFile: any) => {
      if (error) return console.log(error);
      return JSON.parse(jsonFile);
    });
    expect(await getPosts()).toBe(jsonData);
  });
});

describe('UnitTest : editPost ', () => {
  test('edit Post(id: 1)', async () => {
    const jsonData = await getPostById('1');
    const post = JSON.parse(JSON.stringify(jsonData)) as Post;

    const newTitle = 'Edited Item Test Title';
    const newDescription = 'Edited Item Test Description';
    const newTags = ['unit', 'test', 'simple'];

    const copyPost = { ...post };
    copyPost.title = newTitle;
    copyPost.description = newDescription;
    copyPost.tags = newTags;

    await editPost(copyPost).then(async () => {
      const editedPost = await getPostById('1');
      expect(JSON.stringify(editedPost)).toBe(JSON.stringify(copyPost));
    });
  });
});

describe('UnitTest : deletePost', () => {
  test('delete Post(id: 2)', async () => {
    const res = await deletePost('2');
    expect(res).toBe('success');
  });
});

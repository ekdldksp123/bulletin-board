import styled from '@emotion/styled';
import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { usePost } from '../../libs/store.module';
import { AddPost, Post } from '../../types/post';
import { Input, TagBox, TagInput, TagItem, TextArea } from '../atom/InputGroup';

/**
 *
 * @author vinchaekim
 * @description add 및 edit 공통 form
 *
 */

export const PostForm: React.FC = () => {
  const { post, setPost } = usePost();

  const [tagItem, setTagItem] = useState<string>('');
  const [tagList, setTagList] = useState<string[]>(post.tags ? post.tags : []);
  const [disabled, setDisabled] = useState<boolean>(false);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const newPost = { ...post, [e.target.name]: e.target.value };
    setPost(newPost);
  };

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    // Space bar (keyCode = 0) 와 태그 리스트가 3개 미만일 때만 태그 추가 가능
    if (target.value.length !== 0 && e.charCode === 32 && tagList.length < 3) {
      addTagItem();
    }
  };
  const addTagItem = () => {
    //TODO tag 바로 insert 안되는 문제 해결하기
    setTagList([...tagList, tagItem]);
    setTagItem('');
  };

  const deleteTagItem = (deleteTagItem: string) => {
    const filteredTagList = tagList.filter((tagItem) => tagItem !== deleteTagItem);
    setTagList([...filteredTagList]);
  };

  useEffect(() => {
    if (tagList.length >= 3) setDisabled(true);
    else if (tagList.length < 3) setDisabled(false);
    setPost({ ...post, tags: tagList } as Post); // TODO add 시 태그 마지막 누락되는 문제 해결해야됨
  }, [tagList]);

  return (
    <Form>
      <Input
        name="title"
        type="text"
        placeholder="Title"
        value={post.title}
        maxLength={40}
        onChange={(e) => onChangeHandler(e)}
      />
      <TextArea
        name="description"
        placeholder="Description"
        value={post.description}
        maxLength={1000}
        onChange={(e) => onChangeHandler(e)}
      />
      <TagBox>
        {tagList.map((tagItem, index) => {
          return (
            <TagItem key={index}>
              <span>{tagItem}</span>
              <a className="close" onClick={() => deleteTagItem(tagItem)}>
                &nbsp;&nbsp;X
              </a>
            </TagItem>
          );
        })}
        <TagInput
          type="text"
          placeholder="Press enter to add tags"
          tabIndex={2}
          onChange={(e) => setTagItem(e.target.value)}
          value={tagItem}
          onKeyPress={(e) => onKeyPressHandler(e)}
          disabled={disabled}
        />
      </TagBox>
    </Form>
  );
};

const Form = styled.form`
  width: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

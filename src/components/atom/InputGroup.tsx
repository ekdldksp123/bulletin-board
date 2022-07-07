import styled from '@emotion/styled';

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding: 5px 8px 5px 25px;
  box-sizing: border-box;
  margin-bottom: 25px;
  font-family: inherit;

  transition: background-color 0.2s ease 0s;
  background: repeat scroll 0 0 transparent;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: none;

  font-size: 1rem;
  line-height: 1rem;

  &:focus {
    background: none repeat scroll 0 0 f5f5f5;
    outline: none;
    color: #616161;
    font-weight: bold;

    &::placeholder {
      color: #616161;
      font-weight: bold;
    }
  }

  &::placeholder {
    color: #616161;
    font-weight: bold;
  }

  &:required {
    background-color: rgb(232, 240, 254);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 180px;
  transition: background-color 0.2s ease 0s;
  background: repeat scroll 0 0 transparent;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  line-height: 1rem;
  padding: 25px;
  background-color: #f5f5f5;
  box-sizing: border-box;
  margin-bottom: 25px;
  font-family: inherit;

  &:focus {
    background: none repeat scroll 0 0 f5f5f5;
    border-color: #f5f5f5;
    outline: none;
    color: #616161;
    font-weight: bold;

    &::placeholder {
      color: #616161;
      font-weight: bold;
    }
  }

  &::placeholder {
    color: #616161;
    font-weight: bold;
  }

  &:required {
    background-color: rgb(232, 240, 254);
  }
`;

export const TagBox = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  height: 50px;
  width: 100%;
  margin: 10px;
  padding: 0 10px;

  background: repeat scroll 0 0 transparent;
  background-color: #f5f5f5;
  border-radius: 10px;
  border: none;

  &:focus-within {
    border-color: #616161;
  }
`;
export const TagItem = styled.div`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 5px;
  background-color: tomato;
  border-radius: 5px;
  color: white;
  font-size: 13px;

  & .close {
    color: white;
    text-decoration: none;
  }
`;

export const TagInput = styled.input`
  display: inline-flex;
  background: transparent;
  border: none;
  outline: none;
  cursor: text;

  font-size: 1rem;

  &::placeholder {
    color: #616161;
  }
`;

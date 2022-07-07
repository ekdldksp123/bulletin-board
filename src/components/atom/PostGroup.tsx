import styled from '@emotion/styled';

export const PostFooter = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
`;

export const PostWrapper = styled.article`
  display: flex;
  flex-direction: column;
  height: 70%;
  width: 100%;
`;

export const TagsAndDate = styled.section`
  display: flex;
  justify-content: space-between;
`;

export const TagBox = styled.section`
  margin: 0 !important;
  display: flex;
  height: 50px;
  width: 200px;
  margin: 10px;
  padding-left: 0;
  padding-bottom: 15px;
`;

export const CreatedDate = styled.section`
  padding-bottom: 15px;
  & span {
    color: #9b9393;
    font-size: 16px;
  }
`;

export const Title = styled.title`
  display: inline-block;
  color: #4b4b4b;
  font-size: 25px;
  font-weight: bold;
  padding-bottom: 15px;
  padding-top: 15px;
`;

export const Description = styled.section`
  overflow-y: auto;
  width: 100%;
  max-height: 80%;
  overflow-y: auto;
  font-size: 1.35em;
  color: #6c6b6b;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    height: 25%;
    background-color: #d5f591;
    border-radius: 10px;
    box-shadow: -1px 5px 5px #aaaaaa;
  }
`;

export const PostContainer = styled.section`
  width: 90%;
  height: 80%;

  background-image: #fff;
  opacity: 0.8;
  color: #fff;

  border-radius: 15px;
  margin-bottom: 25px;
  margin-top: 25px;

  transition: 0.5s;
  &:hover {
    opacity: 1;
    transform: scale(1.01);
  }

  & .card-content {
    padding: 30px;
  }

  & .card-title {
    font-size: 25px;
    font-family: 'Open Sans', sans-serif;
    margin-top: 0;
  }

  & .card-text {
    line-height: 1.6;
    height: 120px;
    overflow: hidden;
    padding: 10px;
  }

  & .card-link {
    color: #fff;
    border-top: 1px solid #82c1bb;
    width: 100%;
    padding: 20px;

    & .button-group {
      float: left;
      padding-bottom: 20px;
    }

    & .link-btn {
      float: left;
      cursor: pointer;
      margin-right: 20px;
    }

    & .link-btn:after {
      display: block;
      content: '';
      width: 0;
      height: 2px;
      border-bottom: solid 2px #fff;
      transition: width 0s ease 0s, left 0s ease 0s;
    }
    & .link-btn:hover:after {
      width: 100%;
      left: 0;
    }

    & .createdAt {
      float: right;
      right: 0;
      color: #fff;
    }
  }
`;

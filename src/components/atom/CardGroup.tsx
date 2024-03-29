import styled from '@emotion/styled';

export const Card = styled.section`
  width: 50%;
  height: 350px;

  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  -o-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);

  background-image: linear-gradient(to bottom right, #00bfad, #99a3d4);
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
    cursor: pointer;
    font-size: 25px;
    font-family: 'Open Sans', sans-serif;
    margin-top: 0;
  }

  & .card-text {
    cursor: pointer;
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
      transition: width 0.3s ease 0s, left 0.3s ease 0s;
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

export const Link = styled.div`
  cursor: pointer;
  z-index: 5;
  position: absolute;
  top: 0;
  right: 0;
  padding: 40px !important;
  font-size: 1.35rem;
  color: #fff;

  padding-bottom: 15px;
  &:after {
    display: block;
    content: '';
    left: 0;
    height: 2px;
    width: 100%;
    border-bottom: solid 2px #fff;
    transform-origin: right top;
    transform: scale(0, 1);
    transition: color 0.1s, transform 0.3s ease-out;
  }
  &:hover:after {
    transform-origin: left top;
    transform: scale(1, 1);
  }
`;

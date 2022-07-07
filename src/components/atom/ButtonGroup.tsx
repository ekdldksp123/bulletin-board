import styled from '@emotion/styled';

export const MainButton = styled.button`
  width: 100px;
  height: 45px;

  font-size: 16px;
  font-weight: 600;
  text-align: center;
  color: #fff;
  cursor: pointer;

  background-size: 300% 100%;

  border: none;
  border-radius: 30px;
  background-image: linear-gradient(to right, #0ba360, #3cba92, #30dd8a, #2bb673);
  box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);

  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    moz-transition: all 0.4s ease-in-out;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
`;

export const ConfirmButton = styled.button`
  outline: none;
  width: 130px;
  height: 40px;
  margin: 10px;

  text-align: center;
  text-shadow: 0;
  letter-spacing: 1px;
  color: #1ecd97;

  border-radius: 40px;
  background: #fff;
  border: 2px solid #1ecd97;

  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    color: white;
    background: #1ecd97;
  }
  &:active {
    letter-spacing: 2px;
  }
  &:after {
    content: 'CONFIRM';
  }
`;

export const CancelButton = styled.button`
  outline: none;
  width: 130px;
  height: 40px;
  margin: 10px;

  text-align: center;
  text-shadow: 0;
  letter-spacing: 1px;
  color: #fb4d4c;

  border-radius: 40px;
  background: #fff;
  border: 2px solid #fb4d4c;

  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    color: white;
    background: #fb4d4c;
  }
  &:active {
    letter-spacing: 2px;
  }
  &:after {
    content: 'CANCEL';
  }
`;

export const PrimaryButton = styled.button`
  outline: none;
  width: 130px;
  height: 40px;
  margin: 10px;

  text-align: center;
  text-shadow: 0;
  letter-spacing: 1px;
  color: #0dad8d;

  border-radius: 40px;
  background: #fff;
  border: 2px solid #0dad8d;

  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    color: white;
    background: #0dad8d;
  }
  &:active {
    letter-spacing: 2px;
  }
`;

export const SecondaryButton = styled.button`
  outline: none;
  width: 130px;
  height: 40px;
  margin: 10px;

  text-align: center;
  text-shadow: 0;
  letter-spacing: 1px;
  color: #db4914;

  border-radius: 40px;
  background: #fff;
  border: 2px solid #db4914;

  font-size: 12px;
  font-weight: bold;
  cursor: pointer;

  transition: all 0.25s ease;

  &:hover {
    color: white;
    background: #db4914;
  }
  &:active {
    letter-spacing: 2px;
  }
`;

export const CloseButton = styled.a`
  color: white;
  text-decoration: none;
`;

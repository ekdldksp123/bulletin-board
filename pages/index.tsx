import styled from '@emotion/styled';
import type { NextPage } from 'next';
import Head from 'next/head';

const Main: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="LawAndGood list" content="로앤굿 프론트엔드 과제입니다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ContainerCenter>
        <Card>
          <div className="card-content">
            <span className="card-title">Card Title</span>
            <p className="card-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s.
            </p>
          </div>
        </Card>
      </ContainerCenter>
    </div>
  );
};

export default Main;

const ContainerCenter = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const Card = styled.section`
  width: 50%;

  -webkit-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  -o-box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.3);

  background-image: linear-gradient(to bottom right, #00bfad, #99a3d4);
  color: #fff;

  & .card-content {
    padding: 30px;
  }
  & .card-title {
    font-size: 25px;
    font-family: 'Open Sans', sans-serif;
  }
  & .card-text {
    line-height: 1.6;
  }
  & .card-link {
    padding: 25px;
    width: -webkit-fill-available;
  }
`;

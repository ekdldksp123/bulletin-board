import type { NextPage } from 'next';
import Head from 'next/head';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Posts from '../src/components/view/Posts';
import { getPosts } from '../src/libs/api.module';
import { Post } from '../src/types/post';

/**
 * @author vinchae
 * @param data: Post[]
 * mock 데이터를 서버 사이드에서 받아와서 props 로 넘겨준다
 */

const Main: NextPage = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="LawAndGood list" content="로앤굿 프론트엔드 과제입니다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts list={data}/>
    </div>
  );
};

export default Main;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();
  const data = JSON.parse(JSON.stringify(posts)) as Post[];

  return { props: { data: data} }
}





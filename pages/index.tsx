import type {
  GetServerSideProps,
  GetStaticProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
  NextPage,
} from 'next';
import Head from 'next/head';
import Posts from '../src/components/view/Posts';
import { getPosts } from '../src/libs/api.module';
import { sortByDate } from '../src/libs/date.utils';
import { useEffect, useState } from 'react';
import { Popup } from '../src/components/molecules/Popup';

/**
 * @author vinchae
 * @param data: Post[]
 * mock 데이터 리스트를 static props로 받아와서 props 로 넘겨준다
 * 1. 이때 최신 날짜 순으로 데이터를 정렬해서 뿌려줄 것!
 */

const Main: NextPage = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) setIsReady(true);
  });

  return (
    <div>
      <Head>
        <title>Bulletin Board</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts list={data} />
      {isReady ? <Popup /> : <></>}
    </div>
  );
};

export default Main;

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts(sortByDate);
  return { props: { data: posts } };
};

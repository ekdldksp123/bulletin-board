import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Head from 'next/head';
import Posts from '../src/components/view/Posts';
import { getPosts } from '../src/libs/api.module';
import { Post } from '../src/types/post';
import { sortByDate } from '../src/libs/date.utils';
import { useToggle } from '../src/libs/store.module';
import PopupModal from '../src/components/molecules/Popup';
import { useEffect, useState } from 'react';

/**
 * @author vinchae
 * @param data: Post[]
 * mock 데이터를 서버 사이드에서 받아와서 props 로 넘겨준다
 * 1. 이때 최신 날짜 순으로 데이터를 정렬해서 뿌려줄 것! => static props 로 처리!
 */

const Main: NextPage = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  const { toggle, onClick } = useToggle()
  const [ isReady, setIsReady ] = useState<boolean>(false)

  useEffect(() => {
    if(typeof window !== 'undefined' && window.document) setIsReady(true)
  })
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="LawAndGood list" content="로앤굿 프론트엔드 과제입니다" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Posts list={data}/>
      { isReady ? <PopupModal toggle={toggle} onClose={onClick} title="Popup Test" /> : <></>}
    </div>
  );
};
export default Main;

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getPosts(sortByDate);
  return { props: { data: posts } };
}





import type { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import DetailView from '../src/components/view/Detail';
import { getPostById } from '../src/libs/api.module';
import { Post } from '../src/types/post';
/**
 * @author vinchae
 * @param data: Post[]
 * post 데이터를 서버 사이드 프롭으로 받아와서 props 로 넘겨준다
 * 데이터가 없을 경우 메인으로 리다이렉 시킨다.
 */
const Detail: NextPage = ({ post }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <DetailView post={post} />;
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const data = await getPostById(query.id as string);

  if (!data) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  const post = JSON.parse(JSON.stringify(data)) as Post;

  return { props: { post: post } };
};

export default Detail;

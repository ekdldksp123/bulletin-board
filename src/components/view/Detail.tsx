import React, { useEffect, useState } from 'react';
import { DetailProps } from '../../types/post';
import { Popup } from '../molecules/Popup';
import Post from '../molecules/Post';

const DetailView: React.FC<DetailProps> = (props) => {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.document) setIsReady(true);
  });
  return (
    <>
      <Post {...props} />
      {isReady ? <Popup /> : <></>}
    </>
  );
};

export default DetailView;

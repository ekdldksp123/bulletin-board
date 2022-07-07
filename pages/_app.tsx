import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { HeaderButtonProps } from '../src/types/header';
import { useModal, usePost, useToggle } from '../src/libs/store.module';
import Header from '../src/components/layout/Header';
import { ContainerCenter } from '../src/components/layout/ContainerGroup';

function MyApp({ Component, pageProps }: AppProps) {
  const { onClick } = useToggle();
  const { setTitle, setPost } = usePost();
  const { setType } = useModal();

  const onAddClick = () => {
    setType('form');
    setTitle('Add Item');
    setPost();
    onClick();
  };

  const buttonProps: HeaderButtonProps[] = [{ name: 'Add', onClickHandler: () => onAddClick() }];
  return (
    <ContainerCenter>
      <Header title="Law&Good List" buttons={[...buttonProps]} />
      <Component {...pageProps} />
    </ContainerCenter>
  );
}

export default MyApp;

import React, { useEffect } from 'react';
import { useModal, useToggle } from '../../libs/store.module';
import { Portal } from '../atom/Portal';
import { ConfirmModal, FormModal } from './ModalGroup';

export const Popup: React.FC = () => {
  const { type } = useModal();
  const { toggle } = useToggle();

  const renderModal = type === 'form' ? <FormModal /> : <ConfirmModal />;

  useEffect(() => {
    if (toggle) {
      document.body.style.cssText = `
                position: fixed; top: -${window.scrollY}px
            `;
    } else document.body.style.cssText = '';
  }, [toggle]);

  return <Portal elementId="portal" child={renderModal} />;
};

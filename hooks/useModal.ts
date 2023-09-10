import { useState } from 'react';

type ModalState = {
  isModalVisible: boolean;
  showModal: () => void;
  hideModal: () => void;
};

export const useModal = (): ModalState => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return { isModalVisible, showModal, hideModal };
};

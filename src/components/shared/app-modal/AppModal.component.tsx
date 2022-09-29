import { RepositoryContext } from '@root/api/repository/Repository.context';
import { observer } from 'mobx-react-lite';
import React, { FC, useContext, useRef } from 'react';

import styles from './AppModal.module.scss';

const AppModalView: FC = () => {
  const { modalViewStore } = useContext(RepositoryContext);
  const modalref = useRef<HTMLElement | HTMLFormElement | any>();
  const canShow = modalViewStore.canShowModal();

  const handleModalHide = async (event: React.MouseEvent) => {
    if (event.target === modalref.current.parentElement) modalViewStore.setShowModal(!canShow);
  };

  return (
    <div
      className={`${styles['modal-container']} ${styles[canShow ? 'show' : '']}`}
      onClick={(event: React.MouseEvent) => handleModalHide(event)}
    >
      <div className={`${styles['modal-background']} ${styles[canShow ? '' : 'out']}`}>
        <div className={styles['modal']} ref={modalref}>
          <h2>I'm a Modal</h2>
        </div>
      </div>
    </div>
  );
};
const AppModal = observer(AppModalView);
export default AppModal;

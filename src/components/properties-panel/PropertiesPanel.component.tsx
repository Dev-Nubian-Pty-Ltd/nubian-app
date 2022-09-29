import { XMarkIcon } from '@heroicons/react/24/outline';
import { RepositoryContext } from '@root/api/repository/Repository.context';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { ButtonLink } from '../shared/button-link/ButtonLink.component';
import { Title } from '../shared/title/Title.component';
import styles from './PropertiesPanel.module.scss';
const PropertiesPanelView: React.FC = () => {
  const { propertiesViewStore } = useContext(RepositoryContext);
  const canShow = propertiesViewStore.canShowPanel();

  const handleHidePanel = () => {
    propertiesViewStore.setShowPanel(false);
  };

  return (
    <div className={`${styles['properties-panel']} ${styles[canShow == undefined ? '' : canShow ? 'open' : 'close']}`}>
      <div className={styles['panel-header']}>
        <Title text="Properties Panel" />
        <ButtonLink icon={<XMarkIcon className="icon" />} callback={handleHidePanel} />
      </div>
      <div className={styles['panel-body']}>body</div>
      <div className={styles['panel-footer']}>footer</div>
    </div>
  );
};

const PropertiesPanel = observer(PropertiesPanelView);
export { PropertiesPanel };

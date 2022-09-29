import { XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { ButtonLink } from '../shared/button-link/ButtonLink.component';
import { Title } from '../shared/title/Title.component';
import styles from './PropertiesPanel.module.scss';
const PropertiesPanel: React.FC = () => {
  const [panelClass, setPanelClass] = useState<string>('open');

  const handleHidePanel = () => {
    setPanelClass('close');
  };

  return (
    <div className={`${styles['properties-panel']} ${styles[panelClass]}`}>
      <div className={styles['panel-header']}>
        <Title text="Properties Panel" />
        <ButtonLink icon={<XMarkIcon className="icon" />} callback={handleHidePanel} />
      </div>
      <div className={styles['panel-body']}>body</div>
      <div className={styles['panel-footer']}>footer</div>
    </div>
  );
};

export { PropertiesPanel };

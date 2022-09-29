import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid';
import { RepositoryContext } from '@root/api/repository/Repository.context';
import React, { useContext } from 'react';
import { ButtonLink } from '../shared/button-link/ButtonLink.component';
import styles from './ActionPanel.module.scss';

const ActionPanel: React.FC = () => {
  const { propertiesViewStore } = useContext(RepositoryContext);

  const actionFunctions: any = {
    properties: () => {
      propertiesViewStore.setShowPanel(true);
      console.log('hello');
    },
  };

  const handleClick = (event: React.MouseEvent<Element, MouseEvent>) => {
    const fn = (event.target as HTMLInputElement).getAttribute('data-action');
    if (!fn) return;
    actionFunctions[fn]();
  };
  return (
    <div className={styles['action-panel']}>
      <div className="action-panel-left">action panel</div>
      <div className="action-panel-actions">
        <ButtonLink
          callback={(event: React.MouseEvent<Element, MouseEvent>) => handleClick(event)}
          icon={<AdjustmentsHorizontalIcon className="icon" data-action={'properties'} />}
        />
      </div>
    </div>
  );
};
export { ActionPanel };

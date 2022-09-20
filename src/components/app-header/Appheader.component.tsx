import { ButtonLink } from '@components/shared/button-link/ButtonLink.component';
import { Title } from '@components/shared/title/Title.component';
import { Bars3BottomLeftIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';
import styles from './AppHeader.module.scss';

interface AppheaderProps {
  toggleMenu: any;
  showingMenu: boolean;
}
const AppHeader: React.FC<AppheaderProps> = ({ toggleMenu, showingMenu }) => {
  useEffect(() => {
    console.log(showingMenu);
  }, [showingMenu]);
  return (
    <div className={styles['application-header']}>
      <div className={styles['header-brand']}>
        {showingMenu && <ButtonLink callback={toggleMenu} icon={<Bars3BottomLeftIcon className="icon" />} />}
        <Title text="Nubian" />
        {!showingMenu && <ButtonLink callback={toggleMenu} icon={<ChevronDoubleLeftIcon className="icon" />} />}
      </div>
      <div className={styles['header-middle']}>middle</div>
      <div className={styles['header-user-section']}>user section</div>
    </div>
  );
};

export { AppHeader };

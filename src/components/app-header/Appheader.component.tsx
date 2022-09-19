import React from 'react';
import styles from './AppHeader.module.scss';

interface AppheaderProps {
  toggleMenu: any;
}
const AppHeader: React.FC<AppheaderProps> = ({ toggleMenu }) => {
  return (
    <div className={styles['application-header']} onClick={toggleMenu}>
      AppHeader
    </div>
  );
};

export { AppHeader };

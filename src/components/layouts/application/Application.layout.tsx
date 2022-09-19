import { AppHeader } from '@components/app-header/Appheader.component';
import { SideNav } from '@components/side-nav/SideNav.compoenent';
import React, { useState } from 'react';
import styles from './Application.module.scss';
const ApplicationLayout: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleToggleMenu = async (): Promise<void> => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className={styles['application-layout']}>
      <AppHeader toggleMenu={handleToggleMenu} />
      <main>
        <SideNav showMenu={showMenu} />
      </main>
    </div>
  );
};

export { ApplicationLayout };

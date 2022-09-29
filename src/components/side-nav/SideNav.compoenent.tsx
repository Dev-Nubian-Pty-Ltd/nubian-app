import React, { useEffect, useState } from 'react';
import { LinkNav } from '../shared/link-nav/LinkNav.component';
import styles from './SideNav.module.scss';

interface SideNavProps {
  showMenu: boolean | undefined;
}
const SideNav: React.FC<SideNavProps> = ({ showMenu }) => {
  const [navClass, setNavClass] = useState<string>('');

  useEffect(() => {
    showMenu == undefined ? '' : showMenu ? setNavClass('open') : setNavClass('closed');
  }, [showMenu]);

  return (
    <aside className={`${styles['side-nav']} ${styles[navClass]}`}>
      <div className={styles['side-nav-header']}>header</div>
      <div className={styles['side-nav-body']}>
        <nav>
          <LinkNav />
        </nav>
      </div>
      <footer className={styles['side-nav-footer']}></footer>
    </aside>
  );
};

export { SideNav };

import React from 'react';
import styles from './SideNav.module.scss';

interface SideNavProps {
  showMenu: boolean;
}
const SideNav: React.FC<SideNavProps> = ({ showMenu }) => {
  const toggleClass = showMenu ? 'open' : 'hidden';
  return <aside className={`${styles['side-nav']} ${styles[toggleClass]}`}>SideNav</aside>;
};

export { SideNav };

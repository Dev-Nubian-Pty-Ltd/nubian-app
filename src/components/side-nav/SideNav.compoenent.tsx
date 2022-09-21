import { ChartBarSquareIcon, ChartPieIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './SideNav.module.scss';

interface SideNavProps {
  showMenu: boolean;
}
const SideNav: React.FC<SideNavProps> = ({ showMenu }) => {
  const toggleClass = showMenu ? 'open' : 'hidden';
  return (
    <aside className={`${styles['side-nav']} ${styles[toggleClass]}`}>
      <div className={styles['side-nav-header']}>header</div>
      <div className={styles['side-nav-body']}>
        <nav>
          <NavLink to="" className={({ isActive }) => (isActive ? styles['active'] : undefined)} end>
            <span className={styles['icon-wrapper']}>
              <ChartPieIcon className={`icon ${styles['icon']}`} />
            </span>
            <span>Dashboard</span>
          </NavLink>
          <NavLink to="/projects" className={({ isActive }) => (isActive ? styles['active'] : undefined)}>
            <span className={styles['icon-wrapper']}>
              <ChartBarSquareIcon className={`icon ${styles['icon']}`} />
            </span>
            <span>Projects</span>
          </NavLink>
          <NavLink to="/crm" className={({ isActive }) => (isActive ? styles['active'] : undefined)}>
            <span className={styles['icon-wrapper']}>
              <ShoppingCartIcon className={`icon ${styles['icon']}`} />
            </span>
            <span>CRM Management</span>
          </NavLink>
        </nav>
      </div>
      <footer className={styles['side-nav-footer']}></footer>
    </aside>
  );
};

export { SideNav };

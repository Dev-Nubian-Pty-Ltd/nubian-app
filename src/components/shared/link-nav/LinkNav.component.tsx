import { ChartBarSquareIcon, ChartPieIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './LinkNav.module.scss';

const LinkNav: React.FC = () => {
  const links = [
    {
      name: 'dashboard',
      path: '',
    },
    {
      name: 'projects',
      path: '/projects',
    },
    {
      name: 'crm management',
      path: '/crm',
    },
    {
      name: 'human resources',
      path: '/human-resources',
    },
  ];

  return (
    <span className={styles['link-nav']}>
      {links.map((link, idx) => {
        return (
          <NavLink
            key={idx}
            to={link.path}
            className={({ isActive }) => (isActive ? `${styles['nav-link-item']} ${styles['active']}` : styles['nav-link-item'])}
            state={{ name: link.name, path: link.path }}
            end
          >
            <span className={styles['icon-wrapper']}>
              {link.name === 'dashboard' && <ChartPieIcon className={`icon ${styles['icon']}`} />}
              {link.name === 'projects' && <ChartBarSquareIcon className={`icon ${styles['icon']}`} />}
              {link.name === 'crm management' && <ShoppingCartIcon className={`icon ${styles['icon']}`} />}
              {link.name === 'human resources' && <UserGroupIcon className={`icon ${styles['icon']}`} />}
            </span>
            <span>{link.name}</span>
          </NavLink>
        );
      })}
    </span>
  );
};

export { LinkNav };

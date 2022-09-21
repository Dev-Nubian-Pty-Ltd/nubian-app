import { ButtonLink } from '@components/shared/button-link/ButtonLink.component';
import { Title } from '@components/shared/title/Title.component';
import { Bars3BottomLeftIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/solid';
import React, { useEffect, useState } from 'react';
import styles from './AppHeader.module.scss';

interface AppheaderProps {
  toggleMenu: any;
  showingMenu: boolean;
}
const AppHeader: React.FC<AppheaderProps> = ({ toggleMenu, showingMenu }) => {
  const [order, setOrder] = useState<{ [key: string]: string } | null>({
    first: '1',
    second: '2',
  });

  useEffect(() => {
    const newOrder = showingMenu
      ? {
          first: '1',
          second: '2',
        }
      : {
          first: '2',
          second: '1',
        };
    setOrder(newOrder);

    return () => {
      setOrder(null);
    };
  }, [showingMenu]);

  return (
    <div className={styles['application-header']}>
      <div className={styles['header-brand']}>
        <ButtonLink
          style={{ order: order?.first }}
          callback={toggleMenu}
          icon={showingMenu ? <Bars3BottomLeftIcon className="icon" /> : <ChevronDoubleLeftIcon className="icon" />}
        />
        <Title style={{ order: order?.second }} text="Nubian" />
      </div>
      <div className={styles['header-middle']}>middle</div>
      <div className={styles['header-user-section']}>user section</div>
    </div>
  );
};

export { AppHeader };

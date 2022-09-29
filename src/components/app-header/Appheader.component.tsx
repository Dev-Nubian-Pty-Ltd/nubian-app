import { Avatar } from '@components/shared/avatar/Avatar.component';
import { ButtonLink } from '@components/shared/button-link/ButtonLink.component';
import { Title } from '@components/shared/title/Title.component';
import { Bars3BottomLeftIcon, ChevronDoubleLeftIcon } from '@heroicons/react/24/solid';
import { User } from '@root/api/repository/sessions/SessionsData.store';
import React, { useEffect, useState } from 'react';
import styles from './AppHeader.module.scss';

interface AppheaderProps {
  toggleMenu: any;
  showingMenu: boolean | undefined;
  user: User;
}
const AppHeader: React.FC<AppheaderProps> = ({ toggleMenu, showingMenu, user }) => {
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
        <Title style={{ order: order?.second }} text={user.account.company} />
      </div>
      <div className={styles['header-middle']}></div>
      <div className={styles['header-user-section']}>
        <Avatar imageSrc={user.imageSrc} />
        <span className={styles['user-name']}>{user.fullName || user.email}</span>
      </div>
    </div>
  );
};

export { AppHeader };

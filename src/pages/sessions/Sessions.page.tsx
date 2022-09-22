import Login from '@root/components/login/Login.component';
import Register from '@root/components/register/Register.component';
import { Tabs } from '@root/components/shared/tabs/Tabs.component';
import React from 'react';
import styles from './Sessions.module.scss';
const SessionsPage: React.FC = () => {
  const tabHeadings = ['Login', 'Register'];
  return (
    <div className={styles['sessions-page']}>
      <div className={styles['left']}></div>
      <div className={styles['right']}>
        <div className={styles['session-wrapper']}>
          <Tabs tabHeadings={tabHeadings}>
            <Login />
            <Register />
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export { SessionsPage };

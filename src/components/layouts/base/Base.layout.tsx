import { NotFound } from '@root/pages/not-found/NotFound.page';
import { SessionsPage } from '@root/pages/sessions/Sessions.page';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styles from './Base.module.scss';
const BaseLayout: React.FC = () => {
  return (
    <div className={styles['base-layout']}>
      <Routes>
        <Route path="/*" element={<NotFound />}></Route>
        <Route index element={<SessionsPage />}></Route>
      </Routes>
    </div>
  );
};

export { BaseLayout };

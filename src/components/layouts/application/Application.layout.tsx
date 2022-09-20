import { AppHeader } from '@components/app-header/Appheader.component';
import { SideNav } from '@components/side-nav/SideNav.compoenent';
import { CrmPage } from '@root/pages/crm/Crm.page';
import { DashboardPage } from '@root/pages/dashboard/Dashboard.page';
import { NotFound } from '@root/pages/not-found/NotFound.page';
import { ProjectPage } from '@root/pages/projects/Projects.page';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './Application.module.scss';
const ApplicationLayout: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const handleToggleMenu = async (): Promise<void> => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className={styles['application-layout']}>
      <AppHeader toggleMenu={handleToggleMenu} showingMenu={showMenu} />
      <main>
        <SideNav showMenu={showMenu} />
        <div className={styles['application-content']}>
          <Routes>
            <Route path="/*" element={<NotFound />}></Route>
            <Route index element={<DashboardPage />}></Route>
            <Route path="/projects" element={<ProjectPage />}></Route>
            <Route path="/crm" element={<CrmPage />}></Route>
          </Routes>
        </div>
      </main>
    </div>
  );
};

export { ApplicationLayout };

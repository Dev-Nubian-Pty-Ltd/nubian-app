import { AppHeader } from '@components/app-header/Appheader.component';
import { SideNav } from '@components/side-nav/SideNav.compoenent';
import { User } from '@root/api/repository/sessions/SessionsData.store';
import { ActionPanel } from '@root/components/action-panel/ActionPanel.coponents';
import { PropertiesPanel } from '@root/components/properties-panel/PropertiesPanel.component';
import AppModal from '@root/components/shared/app-modal/AppModal.component';
import { CrmPage } from '@root/pages/crm/Crm.page';
import { DashboardPage } from '@root/pages/dashboard/Dashboard.page';
import { HumanResourcePage } from '@root/pages/human-resource/HumaResources.component';
import { NotFound } from '@root/pages/not-found/NotFound.page';
import { ProjectPage } from '@root/pages/projects/Projects.page';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import styles from './Application.module.scss';

interface ApplicationProps {
  user: User | null | undefined;
}
const ApplicationLayout: React.FC<ApplicationProps> = ({ user }) => {
  const [showMenu, setShowMenu] = useState<boolean | undefined>(undefined);

  const handleToggleMenu = async (): Promise<void> => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <div className={styles['application-layout']}>
      {user && <AppHeader toggleMenu={handleToggleMenu} showingMenu={showMenu} user={user} />}
      <main>
        <SideNav showMenu={showMenu} />
        <div className={styles['application-content']}>
          <ActionPanel />
          <Routes>
            <Route path="/*" element={<NotFound />}></Route>
            <Route index element={<DashboardPage />}></Route>
            <Route path="/projects" element={<ProjectPage />}></Route>
            <Route path="/human-resources" element={<HumanResourcePage />}></Route>
            <Route path="/crm" element={<CrmPage />}></Route>
          </Routes>
        </div>
      </main>
      <AppModal />
      <PropertiesPanel />
    </div>
  );
};
export { ApplicationLayout };

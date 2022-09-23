import { ApplicationLayout } from '@components/layouts/application/Application.layout';
import { BaseLayout } from '@components/layouts/base/Base.layout';
import { iRepositoryContext, RepositoryContext } from '@root/api/repository/Repository.context';
import { User } from '@root/api/repository/sessions/SessionsData.store';
import { observer } from 'mobx-react-lite';
import React, { useContext, useEffect, useState } from 'react';

const SessionManagerView: React.FC = () => {
  const [user, setuser] = useState<User | null>();
  const { sessionsDataStore } = useContext<iRepositoryContext>(RepositoryContext);
  const authenticated: boolean = sessionsDataStore.isAuthenticated();

  useEffect(() => {
    sessionsDataStore.getUser().then((data) => {
      setuser(data);
    });
  }, [authenticated]);

  return (
    <div className="session-manager">
      {authenticated && <ApplicationLayout user={user} />}
      {!authenticated && <BaseLayout />}
    </div>
  );
};
const SessionManager = observer(SessionManagerView);
export { SessionManager };

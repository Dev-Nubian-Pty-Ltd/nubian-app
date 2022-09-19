import React from 'react';
import ApplicationLayout from '../../components/layouts/application/Application.layout';
import BaseLayout from '../../components/layouts/base/Base.layout';

interface SessionProps {
  authenticated: boolean | undefined;
}
export const SessionManager: React.FC<SessionProps> = ({ authenticated }) => {
  return (
    <div className="session-manager">
      {authenticated && <ApplicationLayout />}
      {!authenticated && <BaseLayout />}
    </div>
  );
};

export default SessionManager;

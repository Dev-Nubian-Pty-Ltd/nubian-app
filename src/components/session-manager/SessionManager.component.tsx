import { ApplicationLayout } from '@components/layouts/application/Application.layout';
import { BaseLayout } from '@components/layouts/base/Base.layout';
import React from 'react';

interface SessionProps {
  authenticated: boolean | undefined;
}
const SessionManager: React.FC<SessionProps> = ({ authenticated }) => {
  return (
    <div className="session-manager">
      {authenticated && <ApplicationLayout />}
      {!authenticated && <BaseLayout />}
    </div>
  );
};

export { SessionManager };

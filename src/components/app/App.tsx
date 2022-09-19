import { SessionManager } from '@components/session-manager/SessionManager.component';
import { useEffect, useState } from 'react';
import './App.scss';

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean>(true);
  useEffect(() => {
    const interval = setInterval(() => {
      setAuthenticated((prev) => !prev);
    }, 1000 * 60 * 60);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return <SessionManager authenticated={authenticated} />;
};

export { App };

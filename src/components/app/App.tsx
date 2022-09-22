import { SessionManager } from '@components/session-manager/SessionManager.component';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './App.scss';

interface LastVisited {
  path: string | any;
}
const App: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [lastVisited, setLastVisted] = useState<LastVisited>();
  const [authenticated, setAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setAuthenticated((prev) => !prev);
      setLastVisted(location.state);
    }, 1000 * 60 * 60);

    !authenticated ? navigate('/sessions') : navigate(lastVisited?.path);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <SessionManager authenticated={authenticated} />;
};

export { App };

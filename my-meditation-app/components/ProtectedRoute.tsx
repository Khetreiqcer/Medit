import { useContext, useEffect, ReactNode } from 'react';
import AuthContext from '../context/AuthContext';
import { useRouter } from 'next/router';

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return <>{children}</>;
};

export default ProtectedRoute;

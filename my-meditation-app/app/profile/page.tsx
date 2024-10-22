import { useContext, useEffect } from 'react';
import AuthContext from '../../context/AuthContext';
import { useRouter } from 'next/router';
import ProtectedRoute from '@/components/ProtectedRoute';


const Profile: React.FC = () => {

  const { user } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      // Se o usuário não estiver logado, redirecionar para o login
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null; // Ou mostrar um componente de carregamento

  return (
    <ProtectedRoute>

    </ProtectedRoute>
  );
};

export default Profile;

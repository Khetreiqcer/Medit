'use client'
import { createContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface AuthContextProps {
  user: User | null;
  login: (userData: User) => void;
  logout: () => void;
}

interface User {
  email: string;
  
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  login: () => {},
  logout: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário está logado ao carregar o aplicativo
    // Por exemplo, verificar um cookie ou localStorage
  }, []);

  const login = (userData: User) => {
    setUser(userData);
    // Salvar dados no cookie ou localStorage
  };

  const logout = () => {
    setUser(null);
    // Remover dados do cookie ou localStorage
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

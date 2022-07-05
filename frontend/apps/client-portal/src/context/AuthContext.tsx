import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { User } from '@firebase/auth-types';
import { auth } from '../../firebase/config';

interface IAuthContext {
  user: User | null;
  setUser: (user: User) => void;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => {},
});

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const authUser = currentUser as User;
      setUser(authUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const saveAccessToken = async () => {
      if (user) {
        const accessToken = await user.getIdToken();
        localStorage.setItem('accessToken', accessToken);
      }
    };
    saveAccessToken();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

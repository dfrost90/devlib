import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { toast } from 'react-toastify';
import { push, ref, set } from 'firebase/database';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);

  const userSignIn = async (email, password) => {
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      toast.success(`Welcome back ${user.email}`);
    } catch (error) {
      toast.error(error.code);
    }
  };

  const userSignUp = async (email, password) => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      toast.success(`Welcome ${user.email}`);
    } catch (error) {
      toast.error(error.code);
    }
  };

  const userSignOut = async () => {
    try {
      await signOut(auth);
      toast.info(`Signing out...`);
    } catch (error) {
      toast.error(error.code);
    }
  };

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{ authUser, userSignUp, userSignIn, userSignOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext);
};

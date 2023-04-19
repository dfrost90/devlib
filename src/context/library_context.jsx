import { useContext, createContext, useEffect, useState, useMemo } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';
import { useAuthContext } from './auth_context';
const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const { authUser } = useAuthContext();
  const [storage, setStorage] = useState([]);

  const getData = () => {
    const query = ref(db, `storage/${authUser?.uid || 'all'}`);
    return onValue(query, (snapshot) => {
      const data = snapshot.val();

      if (snapshot.exists()) {
        const allLibraries = Object.keys(data).map((library) => ({
          ...data[library],
        }));
        setStorage(allLibraries);
      }
    });
  };

  useEffect(() => {
    getData();
  }, [authUser]);

  return (
    <LibraryContext.Provider
      value={useMemo(() => ({ storage, setStorage }), [storage, setStorage])}
    >
      {children}
    </LibraryContext.Provider>
  );
};

export const useLibraryContext = () => {
  return useContext(LibraryContext);
};

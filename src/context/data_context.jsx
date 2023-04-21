import { useContext, createContext, useEffect, useState, useMemo } from 'react';
import { onValue, ref } from 'firebase/database';
import { db } from '../firebase';
import { useAuthContext } from './auth_context';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
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
    <DataContext.Provider
      value={useMemo(() => ({ storage, setStorage }), [storage, setStorage])}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};

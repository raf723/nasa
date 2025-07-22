import { useMemo, useState, useContext, createContext, useEffect } from 'react';

import { mmkv } from '../../config/storage';

const GlobalContext = createContext(null);

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  return context;
};

export const GlobalProvider = ({ children }) => {
  const [saved, setSaved] = useState([]);

  // ** ** ** ** ** EFFECTS ** ** ** ** ** //
  useEffect(() => {
    getInitialSaved();
  }, []);

  // ** ** ** ** ** ACTIONS ** ** ** ** ** //
  const getInitialSaved = () => {
    const res = mmkv.getString('saved_images');
    return res ? JSON.parse(res) : [];
  };

  // ** ** ** ** ** MEMOIZE ** ** ** ** ** //
  const values = useMemo(() => ({ saved, setSaved }), [saved, setSaved]);

  // ** ** ** ** ** RENDER ** ** ** ** ** //
  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

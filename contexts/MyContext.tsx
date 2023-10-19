import React, { ReactNode, createContext, useContext, useState } from 'react';

type MyContextType = {
  data: string;
  updateData: (newData: string) => void;
};

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyContextProvider: React.FC<{children:ReactNode}> = ({ children }) => {
  const [data, setData] = useState('Default Data');

  const updateData = (newData: string) => {
    setData(newData);
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
};

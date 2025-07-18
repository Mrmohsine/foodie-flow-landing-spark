import React, { createContext, useContext, useState } from 'react';

export const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
  const [url, setUrl] = useState('https://foodieflow.vercel.app');
  return (
    <UrlContext.Provider value={{ url, setUrl }}>
      {children}
    </UrlContext.Provider>
  );
};

export const useUrl = () => useContext(UrlContext);
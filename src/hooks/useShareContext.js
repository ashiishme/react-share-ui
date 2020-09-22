import { createContext, useContext } from 'react';

export const ShareContext = createContext();

export const useShareContext = () => useContext(ShareContext);
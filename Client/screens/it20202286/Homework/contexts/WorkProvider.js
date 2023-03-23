import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

const WorkContext = createContext();
const WorkProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const findNotes = async () => {
    const result = await AsyncStorage.getItem('notes');
    if (result !== null) setNotes(JSON.parse(result));
  };

  useEffect(() => {
    findNotes();
  }, []);

  return (
    <WorkContext.Provider value={{ notes, setNotes, findNotes }}>
      {children}
    </WorkContext.Provider>
  );
};

export const useNotes = () => useContext(WorkContext);

export default WorkProvider;

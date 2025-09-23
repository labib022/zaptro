import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchElectronics = async () => {
    try {
      const res = await axios.get(
        'https://fakestoreapi.com/products/category/electronics'
      );
      console.log('Electronics data:', res.data); // check data in console
      setData(res.data);
    } catch (error) {
      console.error('Error fetching electronics:', error);
    }
  };

  useEffect(() => {
    fetchElectronics();
  }, []);

  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

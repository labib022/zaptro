import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products');
      console.log('Electronics data:', res.data.products);
      setData(res.data.products); // শুধু products array নাও
    } catch (error) {
      console.error('Error fetching electronics:', error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <DataContext.Provider value={{ data, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);

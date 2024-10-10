import { useEffect } from 'react';

import axios from 'axios';
import authFetch from '../axios/custom';

const randomUserUrl = 'https://randomuser.me/api';

const CustomInstance = () => {
  const fetchData = async () => {
    try {
      const res1 = await authFetch('/react-store-products');
      const res2 = await axios(randomUserUrl);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className='text-center'>custom instance</h2>;
};
export default CustomInstance;

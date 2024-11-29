import Cookies from 'js-cookie';
import { useState } from 'react';

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (username, password) => {

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed!');
      }

      const data = await response.json();

      
      Cookies.set('token', data.token, { path: '/' }); 

      

      return data; 

    } catch (error) {
      setError(error.message);
      console.error(error);
      throw error; 
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;

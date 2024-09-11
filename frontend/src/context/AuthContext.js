import { createContext, useState } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const login = async (username, password) => {
    try {
      const res = await axios.post('http://localhost:5001/api/admin/login', { username, password });
      setAuth(res.data.token);
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

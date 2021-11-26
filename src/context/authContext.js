import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  EmployeeId: {},
  token: null,
  enterAs : "",
  login: () => {},
  enterType: () => {},
  logout: () => {}
});
export default AuthContext ;
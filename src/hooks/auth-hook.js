import { useState, useCallback, useEffect } from 'react';
let logoutTimer;

 const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [EmployeeId, setEmployeeId] = useState({});
  const [enterAs, setEnterAs] = useState("");
  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setEmployeeId(uid);
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    localStorage.setItem(
      'userData',
      JSON.stringify({
        EmployeeId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString()
      })
    );
    
  }, []);
  const enterType = useCallback(( enterAs) => {
    setEnterAs(enterAs);
    localStorage.setItem(
      'usageType',
      JSON.stringify({
        enterAs: enterAs
      })
    );
    return enterAs ;
    
  }, []);


  const logout = useCallback(() => {
    setToken(null);
    setEnterAs("");
    setTokenExpirationDate(null);
    setEmployeeId({});
    localStorage.removeItem('userData');
    localStorage.removeItem('usageType');
  }, []);

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    } else {
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpirationDate]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      login(storedData.EmployeeId, storedData.token, new Date(storedData.expiration));
      console.log(storedData.EmployeeId);
    }
  }, [login]);
 
  return { token,enterAs, login, logout,enterType, EmployeeId };
};
export default useAuth ;
/* eslint-disable react/jsx-no-constructed-context-values */
import react from "react";


const AuthContext = react.createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const persistedAuth = JSON.parse(localStorage.getItem("auth"));
  const [auth, setAuth] = react.useState(persistedAuth);

  function signin(authData) {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <AuthContext.Provider value={{ auth, signin }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;

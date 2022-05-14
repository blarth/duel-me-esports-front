/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-constructed-context-values */
import react from "react";

const UserContext = react.createContext();

// eslint-disable-next-line react/prop-types
export function UserProvider({ children, user, setUser }) {
  const persistedUser = JSON.parse(localStorage.getItem("user"));
  return (
    <UserContext.Provider value={{ user, setUser, persistedUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContext;

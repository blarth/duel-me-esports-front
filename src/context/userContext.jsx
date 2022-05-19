/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-constructed-context-values */
import react, {useState} from "react";

const UserContext = react.createContext();

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const persistedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState('')
  return (
    <UserContext.Provider value={{ user, setUser, persistedUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;

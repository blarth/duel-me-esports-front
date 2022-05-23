/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-no-constructed-context-values */
import react, {useState} from "react";

const UserContext = react.createContext();

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const persistedUser = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(persistedUser)
  function signUser(userData) {
    setUser(userData)
    localStorage.setItem('user', JSON.stringify(userData))
  }
  return (
    <UserContext.Provider value={{ user, signUser, persistedUser }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext;

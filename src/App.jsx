/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-undef */
/* eslint-disable react/display-name */
import { Grommet } from 'grommet'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme } from './styles/theme'
import { AuthProvider } from './context/authContext'
import { UserProvider } from './context/userContext'
import SignUp from './pages/SignUp/SignUp'
import Timeline from './pages/Timeline/Timeline'
import SignIn from './pages/SignIn/SignIn'


export default function App() {
  return (
    <AuthProvider>
      <UserProvider
      >
        <Grommet theme={theme}>
          <Router>
            <Routes>
              <Route path='/' element={<Timeline />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='*' element={<div>Not found!</div>} />
            </Routes>
          </Router>
        </Grommet>
      </UserProvider>
    </AuthProvider>
  )
}

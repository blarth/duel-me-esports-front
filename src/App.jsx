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
import CreateDuel from './pages/createDuel'
import Duel from './pages/Duel'
import MyDuels from './pages/MyDuels/MyDuels'
import Duels from './pages/Duels'


export default function App() {
  return (
    <AuthProvider>
      <UserProvider>
        <Grommet theme={theme}>
          <Router>
            <Routes>
              <Route path='/' element={<Timeline />} />
              <Route path='/createDuel/:id' element={<CreateDuel />} />
              <Route path='/duel/:id' element={<Duel />} />
              <Route path='/sign-up' element={<SignUp />} />
              <Route path='/sign-in' element={<SignIn />} />
              <Route path='/my-duels' element={<MyDuels />} />
              <Route path='/duels' element={<Duels />} />
              <Route path='*' element={<div>Not found!</div>} />
            </Routes>
          </Router>
        </Grommet>
      </UserProvider>
    </AuthProvider>
  )
}

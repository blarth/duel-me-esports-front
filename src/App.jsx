/* eslint-disable react/display-name */
import { Grommet } from 'grommet'
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { theme } from './styles/theme'
import { Suspense, lazy } from 'react'
import { AuthProvider } from './context/authContext'
import { UserProvider } from './context/userContext'

const Loading = () => <div>Loading...</div>
const LazyWrapper = (Component) => (props) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  )
const Timeline = LazyWrapper(lazy(() => import('./pages/Timeline')))
const Home = LazyWrapper(lazy(() => import('./pages/Timeline/Home')))

export default function App() {
  return (
    <AuthProvider>
      <UserProvider user={user} setUser={setUser}>
        <Grommet theme={theme}>
          <Router>
            <Routes>
              <Route path='/' element={<Timeline />}>
                <Route path='/' element={<Home />} />              
                <Route path='*' element={<div>Not found!</div>} />
              </Route>
            </Routes>
          </Router>
        </Grommet>
      </UserProvider>
    </AuthProvider>
  )
}

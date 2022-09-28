import { Navigate, Route, Routes } from 'react-router-dom'
import { NotFound } from '../pages'
import { privateRoutes, publicRoutes } from '../routes'
import PublicLayout from './PublicLayout'
import PrivateLayout from './PrivateLayout'

const AppLayout = () => {
  const isLoggedIn = false

  return (
    <Routes>
      <Route element={<PublicLayout/>}>
        {Object.values(publicRoutes).map(({ path, component }) => (
          <Route
            key={path}
            path={path}
            element={!isLoggedIn ? component() : <Navigate to="/"/>}
          />
        ))}
      </Route>

      <Route element={<PrivateLayout/>}>
        {Object.values(privateRoutes)
          .map(({ path, component, requiredLogin }) => (
            <Route
              key={path}
              element={!requiredLogin || isLoggedIn ? component() : <Navigate to="/login"/>}
              path={path}
            />
          ))}
      </Route>

      <Route path="*" element={<NotFound/>}/>
    </Routes>
  )
}

export default AppLayout

import { Link, Outlet } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'

const PrivateLayout = () => {
  return (
    <div>
      <ul>
        {
          Object.values(privateRoutes).map(({ path }) => (
            <li key={path}>
              <Link to={path}>{path}</Link>
            </li>
          ))
        }
      </ul>
      <Outlet/>
    </div>
  )
}

export default PrivateLayout

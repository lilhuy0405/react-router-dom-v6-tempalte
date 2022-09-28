import { Link, Outlet } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'

const PublicLayout = () => {
  return (
    <div>
      <ul>
        {
          Object.values(publicRoutes).map(({ path }) => (
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

export default PublicLayout

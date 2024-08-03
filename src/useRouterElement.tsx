import { useRoutes } from 'react-router-dom'
import ProductList from './pages/ProductList'
import Login from './pages/Login'
import Register from './pages/Register'

export default function useRouterElement() {
  const router = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/',
      element: <Register />
    }
  ])
  return router
}

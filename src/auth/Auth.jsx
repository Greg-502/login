import AuthNavbar from './navbar/AuthNavbar'
import AuthFooter from './footer/AuthFooter'
import { Outlet } from 'react-router-dom'

export default function Auth() {
  return (
    <>
      <AuthNavbar />
      <Outlet />
      <AuthFooter />
    </>
  )
}

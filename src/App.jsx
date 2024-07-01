import { useEffect, useState } from 'react'
import { Outlet } from "react-router-dom";
import PortalNavbar from './portal/navbar/PortalNavbar'
import PortalFooter from './portal/footer/PortalFooter'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const checkUserToken = () => {
    const userToken = window.localStorage.getItem('user-token')

    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false)
    }
    setIsLoggedIn(true)
  }

  useEffect(() => {
    checkUserToken()
  }, [isLoggedIn])
  
  return (
    <>
      {isLoggedIn && <PortalNavbar />}
      <Outlet />
      {isLoggedIn && <PortalFooter />}
    </>
  )
}

export default App

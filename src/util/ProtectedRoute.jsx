import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function ProtectedRoute(props) {
  const navigate = useNavigate()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const checkUserToken = () => {
    const userToken = window.localStorage.getItem('user-token')

    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false)
      return navigate('auth/login')
    }
    setIsLoggedIn(true)
  }

  useEffect(() => {
    checkUserToken()
  }, [isLoggedIn])
  

  return (
    <>
      {
        isLoggedIn ? props.children : null
      }
    </>
  )
}

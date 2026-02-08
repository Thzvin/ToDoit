import { Navigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { jalan } from "../../utils/fungsi"
const AuthGuard = ({ children }) => {
  const [isLogin, setIsLogin] = useState([])

  useEffect(() => {
  jalan(setIsLogin)
  }, [])


 if (isLogin.length === 0) return 
 if (!isLogin) return <Navigate to="/login" />


  return children
}

export default AuthGuard
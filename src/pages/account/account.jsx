
import { Navigate , useNavigate } from "react-router-dom"
import "./account.css"
import { useEffect, useState } from "react"
import { jalan } from "../../utils/fungsi"

const Account  = () => {
    const navigate = useNavigate()
    const [account , setAccount] = useState([])
    const logout = async () => {
            const res = await fetch("https://betodoit-production.up.railway.app/logout", {
                method: "POST",
                credentials: "include"
                })


        const data = await res.json()
        navigate("/")


    }
  


    useEffect(() => {
        jalan(setAccount)
    },[])

    
    return (
       <div className="containerAccount">
        
        
        <div className="accountContent">
            <div className="profile">

            </div>
            <p>{account.username}</p>
            <button onClick={logout}>Log Out</button>
           
        </div>
    
       </div>
    )

}

export default Account
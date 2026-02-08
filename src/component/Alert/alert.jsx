
import { useState , useRef} from "react"
import "./alert.css"
import { useNavigate , Navigate } from "react-router-dom"
import { use } from "react"
import { useEffect } from "react"
const Alert = (props) => {
    const navigate = useNavigate()
  const {title  ,setAlert , active , login} = props
  const containerAlert = useRef(null)
  const [act1 , setact] = useState(false)

  useEffect(() => {
    setact(active)
  },[active])

  const back = () => {
    setAlert(false)
    setact(false)
  }
  
  useEffect(() => {

     const togle = (e) => {
        if(!containerAlert.current.contains(e.target)){
          setact(false)
          setAlert(false)
        }
     }

     document.addEventListener("mousedown" , togle)
     return () => {
        document.removeEventListener("mousedown" , togle)
     }
  }, []

  )

    return(
       <div ref={containerAlert} className={`containerAlert ${act1 ? 'active' :  ""}`}>
            <div className="alertCenter">
            <p>{title}</p>
            <div className="buttonGroup">
            
            <button onClick={back}>Oke</button>
            {login ? (
              " "
            ) : (
                <button onClick={() => navigate("/login")}>Login</button>
            )
          }
         
            </div>
            </div>
        </div>
    
    )
}


export default Alert
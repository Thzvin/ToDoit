import { useState ,  useEffect ,useRef} from "react"
import { Navigate , useNavigate } from "react-router-dom"
import { jalan } from "../../utils/fungsi"
import "./nav.css"
const Nav = (props) => {
    const ulref = useRef(null)
    const hamburgerref = useRef(null)
    const navigate = useNavigate()
    const [account , setAccount] = useState([])
    const [active , setActive] = useState(false)
    const [hamburger , setHamburger] = useState(false)
   

  useEffect(() => {
      jalan(setAccount)
    }, [])


    useEffect(() => {
        const jalan =(e) => {
            if(!ulref.current.contains(e.target)){
                if(!hamburgerref.current.contains(e.target)){
                    setActive(false)
                    setHamburger(false)
                }
            }
        }

        document.addEventListener("mousedown" , jalan)

        return () => {
            document.removeEventListener("mousedown" , jalan)
        }
    },[])
const jalankan = () => {
   setActive(!active)
   setHamburger(!hamburger)
}
    return(
       <div className="containerNav">
         
         <div className="tittle">
                <h2>To Do it</h2>
         </div>

            <div className="navigasi">
                <div className="nav">
                <ul ref={ulref} className={active ? "active" : ""}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/guide">Guide</a></li>
                    <li><a href="/about">About</a></li>
               
                </ul>
                </div>

                <div className="accountContainer">
                    {!account ?(
                          <button onClick={() => navigate("/login")}>Login</button>
                    ): (
                        <>
                        <div className="profile">

                        </div>
                        <p onClick={() => navigate("/account") }>{account.username}</p>
                        </> 
                     
                    )}
                </div>

                    
                    <div  ref={hamburgerref} onClick={jalankan} className={`hamburger ${hamburger ? "active" : ""}`}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
            </div>

       </div>
    )
}


export default Nav
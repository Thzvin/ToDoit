import { useState , useEffect } from "react"
import { useNavigate , Navigate } from "react-router-dom"
import "./register.css"
import { urllocal } from "../../utils/fungsi"

const Register = () => {    
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [cpassword , setCpassword] = useState("")
    const [token , setToken] = useState("")

    const navigate = useNavigate()


useEffect(() => {
  window.onRecaptchaSuccess = (token) => {
    setToken(token);
  };
}, []);

    const register = async (e) => {
            e.preventDefault();


        if (!token) {
        alert("Silahkan centang reCAPTCHA");
        return;
        }

        if(username.length < 8){
            alert("username kurang dari 8")
            return
        }


        if(password.length < 8){
            alert("password terlalu pendek")
            return
        }
            if(cpassword != password){
            alert("password tidak sama")
            return
            }


        
        const res = await fetch(`${urllocal}register` , {
                 method: "POST",
                headers: {
                "Content-Type": "application/json"
                },        

                    body: JSON.stringify({
                    username,
                    password,
                    token
                    })


                
        })



        const data = await res.json()
        alert(data.message)
        if(data.hasil === true){
            navigate("/login")
        }

    }
    return(

       
        <div className="containerRegister">
  
            <div className="formRegister">
      <div
  className="g-recaptcha"
  data-sitekey="6LdgtmQsAAAAAMk6oOaUOj7mf3VBN-YfdY0NbmaC"
  data-callback="onRecaptchaSuccess"
></div>
        <div className="text">
        <h1>To Do It</h1>
        <p>Enter your username and password to create account</p>
        </div>

        <div className="line">

        </div>

        <div className="username">
        <label>Username</label>
        <input type="text" 
            placeholder="example2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
        />

        </div>
        
         
        <div className="password">
        <label>Password</label>
        <input type= "password" 
            placeholder="Example*1234."    
            value={password}
               onChange={(e) => setPassword(e.target.value)}
            
        />

        </div>


        <div className="confirmpass">
        <label>Confirm Password</label>
          <input type= "password" 
            placeholder="Example*1234."    
            value={cpassword}
               onChange={(e) => setCpassword(e.target.value)}
            
        />

        </div>
        <button onClick={register}>register</button>
        <h5>have an account? <a href="/login">Login</a></h5>
            </div>



        </div>



       

    )
   
}

export default Register

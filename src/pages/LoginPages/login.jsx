import { useState } from "react"
import { useNavigate , Navigate } from "react-router-dom"
import "./login.css"
const Login = () => {
    const[inputuser, setInputuser] = useState("")
    const[inputpass, setInputpass] = useState("")
    
    const navigate = useNavigate()
  
const kirim = async () => {
    
    if(inputpass.length < 8 ){
        alert("kurang dari 8")
        return
    }

  const res = await fetch("https://betodoit-production.up.railway.app/login", {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: inputuser,
      password: inputpass
    })
  });

  const data = await res.json();
  

  if(data.success === false){
    alert("gagal login")
  }else{
    navigate("/")
  }
};

// console.log(reply)

    return(
        <div className="containerLogin">

            <div className="formcontainer">
            <div className="text">
            <h1>To Do It</h1>
            <p>Please enter <b>Username</b> and <b>Password</b></p>

            </div>
            <div className="line"></div>



            <div className="username">

            <label>Username</label>
            <input type="text" 
            placeholder="example"
                value={inputuser}
                onChange={(e) => {
                    setInputuser(e.target.value)
                }}
            />
            </div>
            

            <div className="password">
            <label>Password</label>
            <input type="password" 
                placeholder="Example.8*123"
                value={inputpass}
                onChange={(e) => [
                    setInputpass(e.target.value)
                ]}
                
            />

            </div>
            <button onClick={kirim}>Sumbit</button>
            <h5>Don't have an account? <a href="/register">Register</a></h5>
            {/* <p>{reply.message}</p> */}
            </div>
        </div>

    )

}


export default Login
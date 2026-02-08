import { useEffect, useState } from "react";
import Action from "../../component/action";
import "./home.css"
import Alert from "../../component/Alert/alert";
import Nav from "../../component/navbar/nav";
import { jalan } from "../../utils/fungsi";
const Home = ()=> {
    const [account , setAccount] =  useState("")
    const [kegiatan , setKegiatan] = useState("")
    const [hasilkegiatan , sethasilkegiatan] = useState([])
    const [index1 , setIndex] = useState([])
    const [active , setActive] = useState(false)
    const [deskripsi, setDeskripsi] = useState("")
    const [title , setTitle] = useState("")
    const [login , setLogin] = useState(false)
    const [count , setCount] = useState(0)
    const [account2 , setAccount2] = useState([])
  
    const panjang = hasilkegiatan.length
    const selesai = (hasilkegiatan.filter(hasil => hasil.status === "selesai").length / panjang) * 100
    const belumseleai = hasilkegiatan.filter(hasil => hasil.status !== "selesai").length
   

    
    // const belumselesai = hasilkegiatan.fill(hasil => hasil.status === "belum selesai").length


    useEffect(() => {
      jalan(setAccount2)
    },[])

    useEffect(() => {
      if(account2.username){
         setLogin(true)
      }
    }, [account2])
      const deleteall = async () => {

        if(count === 0){
            if(hasilkegiatan.length === 0){
                return alert("tidak bisa ganti data kosong")
            }
            
            setCount(count+1)
        }else{
            if(index1.length === 0){
                return setCount(count - 1)
             
            }

              const res = await fetch("https://betodoit-production.up.railway.app/todolist", {
            method : "DELETE",
            credentials : "include",
            headers : {
                  "Content-Type": "application/json"
            },
            body: JSON.stringify({
               index : index1
            })
      })

      const  data = await res.json()

      getTodolist()
   
      setIndex([])
       
    }
  }
    
    const getTodolist = async () => {
      try {
        const res = await fetch("https://betodoit-production.up.railway.app/todolist", {
          credentials: "include"
        })
  
        if (res.status === 401) {
          setAccount("guest")
         return
        }
  
        const data = await res.json()
        
        if(data.success === false){
         return alert("tidak cocok")
        }
        sethasilkegiatan(data.data)
  
      } catch (err) {
        console.error(err)
      }

      setKegiatan("")
      setDeskripsi("")
    }

 useEffect(() => {
  getTodolist()
}, [])

    const tambahjadwal = async () => {
        if(account === "guest"){
           setTitle("Anda belum login")
           setActive(true)
            
           return
        }
       
        if(kegiatan.length === 0 ){
            setTitle("Jadwal tidak boleh kosong")
            setActive(true)
            return
        }


       try{
            const res = await fetch("https://betodoit-production.up.railway.app/todolist", {
             method: "POST",
              credentials: "include",
              headers: {
                  "Content-Type": "application/json"

                },


                body: JSON.stringify({
          
                    title : kegiatan,
                    description : deskripsi
                })


        })
          if(res.status === 400){
              setTitle("judul kepanjangan")
              setActive(true)
          }
          const data = await res.json();
          
          getTodolist()

       }catch(err){
         console.error(err)
       }
  
        
    }

  const handleCheck = ( index , e ) => {
    const ischecked = e.target.checked 

    if(ischecked){
        const  datalama = [...index1 , index]
        setIndex(datalama)
    }else{
       const data = [...index1]
       const hasil = data.filter(hasil => hasil !== index)
      setIndex(hasil)
    }

  }
  



    return(
        <>
            <div className="containerHome">
                
                <Nav></Nav>

                <Alert title={title} setAlert={setActive} active={active} login={login}></Alert>  
                <div className="containerOne">
                    <div className="inputcontainer">
                  
                        <div className="contentInput">
                        <div className="titleinput">

                        <label>Tittle</label>
                        <input type="text"
                            value={kegiatan}
                            placeholder="Gym"
                            onChange={(e) => {
                            setKegiatan(e.target.value)
                        }}
                        />
                        </div>

                        <div className="deskripsiInput">

                        <label >Deskripsi</label>
                        <input type="text" 
                            placeholder="Bicep and Tricep day"
                            value={deskripsi}
                            onChange={(e)  => 
                            setDeskripsi(e.target.value)
                        }
                        />
                        </div>
                       

                <button onClick={tambahjadwal} >Tambah Jadwal</button>
                <button onClick={deleteall}>{count === 0 ||  hasilkegiatan.length === 0  ? "On Checklist" : index1.length === 0 ? "Of Checklist" : "Delete Checklist"}</button>
                
                            </div>
                         
                          
                    </div>
                   



                <div className="containerdata">
                     {hasilkegiatan.length === 0 ? (
                           <h3>Data kosong</h3>
                     ): (
                            hasilkegiatan.map((hasil , index ) => {



                        return(
                        <div key={index}  className={`comtainer ${hasil.status === "selesai" ? "selesai" : ""}` }  >
                       <div className="containerText">

                     <p className="nomor">To Do {index+1}</p>
                     <p className="title">{hasil.title}</p>
                     <p>Deskripsi : {hasil.description.length === 0 ?   "-" : `${hasil.description}`}</p>
                        <Action getTodolist={getTodolist} index={hasil.id} settitle={setTitle} setAct={setActive}  status={hasil.status} setIndex={setIndex} index1={index1} count={count}></Action>
                       </div>
                        
                        <div className={`containercheckbox ${count === 0 ? "" : "active"}`}>
                                <input className="checkbox" type="checkbox" onChange={(e) => handleCheck(hasil.id , e)}/>
                        </div>
                    
                    </div>
                        )
                    })
                     )}
                  
                       
                    </div>
             
                </div>
             
            </div>
            
        </>

    )
}

export default Home;
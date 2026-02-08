import { fungsipatch, urllocal } from "../utils/fungsi"
import { useRef, useState } from "react"

import "./action.css"

const Action = (props) => {
// const action =  useRef(null)
// const containerAction = useRef(null)
const {getTodolist , index , settitle , setAct , status , setIndex , index1 , count} = props
const [active , setActive] = useState(false)



// useEffect(()  => {
//   const tombol = (e) => {
//     if(!action.current.contains(e.target)){
//         if(!containerAction.current.contains(e.target)){
//             setActive(false)
//         }
//     }
//   }


//   document.addEventListener('mousedown' , tombol)


//   return () => {
//       document.removeEventListener('mousedown' , tombol)
//   }
  
  
// }, [])
  
  

  const hapus = async (index , setIndex , index1) => {
      const res = await fetch(`${urllocal}todolist`, {
            method : "DELETE",
            credentials : "include",
            headers : {
                  "Content-Type": "application/json"
            },
            body: JSON.stringify({
               index
            })
      })

      const data = await res.json()
      if(data.success === true){
         settitle("Jadwal berhasil di hapus")
         setAct(true)
         if(index1){
            const data = [...index1]
            const hasil = data.filter(hasil => hasil !== index)
            setIndex(hasil)
         }
      }

      getTodolist()

      setActive(false)


  }


    

        return(
            <div className="containerAction">
                {/* <button onClick={() => setActive(!active)}>Action</button> */}
                {/* <div ref={action} className={`actioninaction ${active ? "active" : ""}`}> */}
                     {count === 0 ? (
                             <button onClick={() => hapus(index ,setIndex , index1 )}>Delete</button>
                     ) : (
                        ""
                     )}
                     {status === 'selesai'? (
                             <button onClick={() => fungsipatch(index , "Belum selesai" , getTodolist , setActive , settitle, setAct)}>Belum Selesai</button>
                     ): (
                              <button onClick={() => fungsipatch(index , "selesai" , getTodolist , setActive , settitle , setAct)}>Selesai</button>
                     )}
                {/* </div> */}
            </div>
        )
}

export default Action
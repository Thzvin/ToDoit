    export const fungsipatch = async (index , action , gettodolist , setActive , settitle , setAct) => {

   
        try{
            
            const res =await fetch(`${urllocal}todolist`, {
                method: "PATCH",
                credentials: "include",
                headers: {
                     "Content-Type": "application/json"
                },

            body: JSON.stringify({
                action : action,
                index,
            })
            })
            
           const data =  await res.json()


           if(res.ok){
             if(gettodolist) await gettodolist()
           }
          
           setActive(false)
          
           settitle("Berhasil mengubah status")
           setAct(true)
          return data
          
        }catch(err){
          console.log(err)
        }
  
       
        
    }



    export const jalan = async (setIsLogin) => {
        const res = await fetch(`${urllocal}me`, {
        credentials: "include"
      })

        if(res.status === 401){
        setIsLogin(false)
        return
      }

      const data = await res.json()

      if(data.login === false){
        setIsLogin(false)
        return
      }

      setIsLogin(data)

    }




    export const urllocal= "https://betodoit-production.up.railway.app/"

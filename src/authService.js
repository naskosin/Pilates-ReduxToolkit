import { useSelector } from "react-redux";
//const username = useSelector((state)=>{return state.auth.user});



export const logIn = async (username, password)=>{
 try{ 
let res = await fetch("https://parseapi.back4app.com/login", {
    method: 'POST',
    headers: {
        'X-Parse-Application-Id':'ylfU1nxUAu75DjXZL0zErazlivOnCyxQJ5Bj13qA',
        'X-Parse-REST-API-Key':'5M3YAfuCxTBg08iYl8K8fUzI0af3mrF7T6MPM2K7',
        'content-type': 'applications/json',
    },
    body: JSON.stringify({username, password})
});
console.log(res)

if(!res.ok){
    console.log(res)
    throw new Error(res.statusText)
}
let result = await res.json();
return result;
}
catch
    (error){
       console.log(error);
        //throw new Error(error)
        throw new Error(error.message)
}

};


export const registerIn = async (password, username, email)=>{
    try{ 
   let res = await fetch("https://parseapi.back4app.com/users", {
       method: 'POST',
       headers: {
           'X-Parse-Application-Id':'ylfU1nxUAu75DjXZL0zErazlivOnCyxQJ5Bj13qA',
           'X-Parse-REST-API-Key':'5M3YAfuCxTBg08iYl8K8fUzI0af3mrF7T6MPM2K7',
           'content-type': 'applications/json',
       },
       body: JSON.stringify({password, username, email})
   });
   console.log(res)
   let result = await res.json();

   if(!res.ok){
       console.log(res.status)
       throw new Error(res.status)
   }
   return result;
   }
   catch
       (error){
          console.log(error);
           //throw new Error(error)
           throw new Error(error)
   }
   
   }

   export const logOut= async ()=>{
    try{ 
   let res = await fetch("https://parseapi.back4app.com/logout", {
       method: 'POST',
       headers: {
           'X-Parse-Application-Id':'ylfU1nxUAu75DjXZL0zErazlivOnCyxQJ5Bj13qA',
           'X-Parse-REST-API-Key':'5M3YAfuCxTBg08iYl8K8fUzI0af3mrF7T6MPM2K7',
           'content-type': 'applications/json',
       },
       body: JSON.stringify({})
   });
  
   
   //if(!res.ok){
   //    console.log(res.status)
   //    throw new Error(res.status)
   //}
   let result = await res.json();
   return result;
   }
   catch
       (error){
          console.log(error);
           //throw new Error(error)
           throw new Error(error)
   }
   
   }

   
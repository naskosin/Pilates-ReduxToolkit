




export const exercises= async ()=>{
    try{ 
   let res = await fetch("https://parseapi.back4app.com/classes/Exercises", {
       method: 'GET',
       headers: {
           'X-Parse-Application-Id':'ylfU1nxUAu75DjXZL0zErazlivOnCyxQJ5Bj13qA',
           'X-Parse-REST-API-Key':'5M3YAfuCxTBg08iYl8K8fUzI0af3mrF7T6MPM2K7',
           'content-type': 'applications/json',
       }
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

   export const createExercises= async (name, price)=>{
    const usermail = localStorage.getItem('user');

    const object=((JSON.parse(usermail)).objectId);
    const user=((JSON.parse(usermail)).username);
    const owner = {__type:"Pointer", className: "_User", objectId: object}
    const exercise = {Name: name, Price: price, owner: owner};
    exercise.owner=owner;
    console.log(exercise)
    try{ 
   let res = await fetch("https://parseapi.back4app.com/classes/Exercises", {
       method: 'POST',
       headers: {
           'X-Parse-Application-Id':'ylfU1nxUAu75DjXZL0zErazlivOnCyxQJ5Bj13qA',
           'X-Parse-REST-API-Key':'5M3YAfuCxTBg08iYl8K8fUzI0af3mrF7T6MPM2K7',
           'content-type': 'applications/json',
       },
       
       body: JSON.stringify(exercise)
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
   

   export const getExercise= async ()=>{
    const usermail = localStorage.getItem('user');
    const id=((JSON.parse(usermail)).objectId);
    try{ 
   let res = await fetch(`https://parseapi.back4app.com/classes/Exercises/?where=%7B%22owner%22%3A%20%7B%22__type%22%3A%22Pointer%22%2C%22className%22%3A%22_User%22%2C%22objectId%22%3A%22${id}%22%7D%7D`, {
       method: 'GET',
       headers: {
           'X-Parse-Application-Id':'ylfU1nxUAu75DjXZL0zErazlivOnCyxQJ5Bj13qA',
           'X-Parse-REST-API-Key':'5M3YAfuCxTBg08iYl8K8fUzI0af3mrF7T6MPM2K7',
           'content-type': 'applications/json',
       }
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

   const encode = 'where{"owner": {"__type":"Pointer","className":"_User","objectId":"kzunnPFh5i"}}'

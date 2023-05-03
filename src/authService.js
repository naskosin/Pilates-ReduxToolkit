export const logIn = async (email, password)=>{
let res = await fetch("https://nasko-apex.onrender.com/users/login", {
    method: 'POST',
    headers: {
        'content-type': 'applications/json',
    },
    body: JSON.stringify({email, password})
});
let result = await res.json();
return result;
}
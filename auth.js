  import  JsonWebToken from "jsonwebtoken"
  const secret ="jaydeep$123"

 function setuser(users){ 
 return JsonWebToken.sign({
    _id:users._id,
    email:users.email
 },secret)
 }

 function getuser(token){
    if(!token)return null;
    try {
        return JsonWebToken.verify(token,secret)
    } catch (error) {
        return null;

    }
    
 }
 
  export default  setuser 
     
    
    
 
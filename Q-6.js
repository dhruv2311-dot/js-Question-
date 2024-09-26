// with function 

function Login(username,password){
    if(username=="admin" && password=="1234"){
        console.log("Login successful");
    }else{
        console.log("Login failed");
    }
}
Login("admin",1234);

// without function 

const username="admin";
const password="1234";
if(username=="admin" && password=="1234"){
       console.log("Login successful");
   }else{
       console.log("Login failed");
   }
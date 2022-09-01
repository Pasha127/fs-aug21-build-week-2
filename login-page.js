// const name = document.getElementById('name') 
// const emails = document.getElementById('email') 
// const psw = document.getElementById('password') 


let users = []
localStorage.setItem("users",[])

const saveData = () =>{
    // preventDefault();
    let username = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    
    let user_data = {};
    user_data.name= username;
    user_data.email= email;
    user_data.password= password;
    users.push(user_data)

    // user_data.push({
    //     "name":username,
    //     "email":email,
    //     "password":password
        
    // })
    localStorage.setItem("users",JSON.stringify(users))
    // localStorage.setItem('email',email)
    // localStorage.setItem('password',password)

    // localStorage.getItem("name")
    

    console.log(user_data)
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('password').value="";
    document.getElementById('cinfirm-password').value="";

   
senderror();
    
} 


// function validation() {
//     let name = document.getElementById('name') 
// let email = document.getElementById('email') 
// let psw = document.getElementById('password') 
//     if(username.value.trim()==""){
//         senderror(name,"name cannot be empty")
//     } 
// }

function senderror(inputField,errorMessage) {
   if(username.value.trim()==""){
       alert("name cannot be emoty")
    } 
}

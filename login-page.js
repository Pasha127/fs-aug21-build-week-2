let username = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value


    let users = []
    localStorage.setItem("users",[])
    
    const saveData = () =>{
    senderror();

    // preventDefault();
    username = document.getElementById('name').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    password = document.getElementById('password').value

    
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
    

    // console.log(user_data)
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('password').value="";
    document.getElementById('confirm-password').value="";

} 


// function validation() {
//     let name = document.getElementById('name') 
// let email = document.getElementById('email') 
// let psw = document.getElementById('password') 
//     if(username.value.trim()==""){
//         senderror(name,"name cannot be empty")
//     } 
// }


function senderror() {
if(document.querySelector("#name").value ===""|| document.querySelector("#name").value==="Name"){
alert("name cannot be empty")

}else if(document.querySelector("#email").value ===""|| document.querySelector("#email").value==="Email"){
alert("email cannot be empty")
}else if(document.querySelector("#password").value ===""|| document.querySelector("#password").value==="password"){
alert("password cannot be empty")
}else if(document.querySelector("#confirm-password").value ===""||
document.querySelector("#confirm-password").value==="NConfirm Password"){
alert("confirm password cannot be empty")
}}


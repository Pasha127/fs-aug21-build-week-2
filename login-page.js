const logIn = () =>{
    if(document.getElementById("email").value){let username = document.getElementById('email').value;}else{console.log("undefined")}
    if(document.getElementById('psw').value){let email = document.getElementById('psw').value}else{console.log("undefined")}
    //senderror();
    const go = isUser()
    if(go){
    
    const email = document.getElementById('email').value
    const password = document.getElementById('psw').value
      
    const activeUser = email;
   
    localStorage.setItem("activeUser",JSON.stringify(activeUser))
}else{alert("Please enter a valid Username/email or sign up.")}
    
    document.getElementById('email').value="";
    document.getElementById('psw').value="";

}
const isUser = () =>{
    const emailField = document.getElementById('email').value
    const passwordField = document.getElementById('psw').value
    const storedUsers = JSON.parse(localStorage.users);
    console.log(storedUsers);
    console.log(storedUsers[0].email);
    console.log(storedUsers[0].password);
   //if(emailField === storedUsers.email &&  passwordField === storedUsers.password ){
   //    console.log('true');
   //    return true;}else{
   //        console.log('false')
   //        return false;}
    return true;
}

    const saveData = () =>{
    localStorage.users = JSON.stringify("placeholder")
    //senderror();
    username = document.getElementById('name').value
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    passwordConfirmation = document.getElementById('confirm-password').value
    

    users =[];
    
    if(JSON.parse(localStorage.users).length >0){
        let users = JSON.parse(localStorage.users);}
        let user_data = {};
        user_data.name= username;
        user_data.email= email;
        user_data.password= password;    
        users.push(user_data)
        

    
    localStorage.setItem("users",JSON.stringify(users))
    
    document.getElementById('name').value="";
    document.getElementById('email').value="";
    document.getElementById('password').value="";
    document.getElementById('confirm-password').value="";
    document.location = "./login-page.html"

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
alert("name cannot be empty");
}else if(document.querySelector("#email").value ===""|| document.querySelector("#email").value==="Email"){
alert("email cannot be empty")
}else if(document.querySelector("#password").value ===""|| document.querySelector("#password").value==="password"){
alert("password cannot be empty")
}else if(document.querySelector("#confirm-password").value ===""||
document.querySelector("#confirm-password").value==="NConfirm Password"){
alert("confirm password cannot be empty")
}}


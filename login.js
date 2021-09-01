

document.getElementById("submit").addEventListener("click", function(){

    const emailName= document.getElementById("email");
    const emailValue=emailName.value;
   const password= document.getElementById("password");
   const passwordValue=password.value;
   
    if(passwordValue==="123456" && emailValue==="mahimtk3@gmail.com"){
        window.location.href="bank.html";
    }else{
        document.getElementById("error").innerText="!!!invalid  Email or password"
    }
  
  emailName.value=" ";
  password.value="";


})

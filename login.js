var em = document.getElementById("email");
var pn = document.getElementById("phone")
var pwd = document.getElementById("password");
var err1 = document.getElementById("err1");
var err2 = document.getElementById("err2");

var regex="/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([a-z]{2,4})$/"

function validate(){
    if(pwd.value.trim()==""){
        err1.innerText ="Field cannot be empty";
        err1.style.color ="red";
        err2.innerText ="Field cannot be empty";
        err2.style.color ="red";
        pwd.style.border = "2px solid red";
        return false
    }
    else if(!regex.test(pwd.value)){
        err2.innerText ="Please enter the proper phone number";
        err1.style.color ="red";
        pwd.style.border = "2px solid red";
        return false
    }
    else{
        err2.innerText ="";
        em.style.border = "2px solid green";
        return true
    }
}


var regex = "/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/"

function validate(){
  if(pwd.value.trim()==""){
      err2.innerText ="Field cannot be empty";
      err2.style.color ="red";
      pwd.style.border = "2px solid red";
      return false
  }
  else if(!regex.test(em.value)){
      err1.innerText ="Please enter the proper email";
      err1.style.color ="red";
      em.style.border = "2px solid red";
      return false
  }
  else{
      err1.innerText ="";
      pwd.style.border = "2px solid green";
      return true
  }
}

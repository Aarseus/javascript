//first name validation starts
function fnameValidate(){
    let first_name=document.getElementById('fname').value
    if(first_name==""){
        displayMsg('firstname is mandatory','fnameMsg','red')
        return false
    }
    // else if(!first_name.match(/^([A-Z])+$/)){
    //     displayMsg('first letter must be in uppercase','fnameMsg','red')
    //     return false
    // }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
        displayMsg('firstname cannot contain number','fnameMsg','red')
        return false
    }
    else if(first_name.length<3){
        displayMsg('firstname must be more than 2 characters','fnameMsg','red')
        return false
    }
    else{
        displayMsg('valid firstname','fnameMsg','green')
        return true
    }
}
//first name validation ends

//last name validation starts
function lnameValidate(){
    let last_name=document.getElementById('lname').value
    if(last_name==""){
        displayMsg('lastname is mandatory','lnameMsg','red')
        return false
    }
    else if(!last_name.match(/^([a-zA-Z])+$/)){
        displayMsg('last name cannot contain number','lnameMsg','red')
        return false
    }
    else if(last_name.length<3){
        displayMsg('lastname must be more than 2 characters','lnameMsg','red')
        return false
    }
    else{
        displayMsg('valid lastname','lnameMsg','green')
        return true
    }
}
//last name validation ends






// email validation

function emailValidate(){
    let email=document.getElementById('email').value
    if(email==""){
        displayMsg('email is mandatory','emailMsg','red')
        return false
    }
    
    // else if(!email.match(/^([a-z0-9])[a-z0-9\_\-\.])+\@+(([a-z])+\.)+([a-z])$/)){
    //     displayMsg('invalid email format','emailMsg','red')
    //     return false
    // }
  else{
        displayMsg('valid email','emailMsg','green')
        return true
    }
}








// password validation


function passwordValidate(){
    let password=document.getElementById('password').value
    if(password==""){
        displayMsg('password is mandatory','passwordMsg','red')
    }
    else if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$&-_.?!]).{8,}$/)){
        displayMsg('password format should be like A@#er34 and minimum of 8 characters','passwordMsg','red')
        return false
    }
    else{
        displayMsg('valid password','passwordMsg','green')
        return true
    }
}

//main function starts

function displayMsg(msg,id,colorvalue){
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=colorvalue
}
//main function ends


// submit function
function validForm(){


if(fnameValidate() && lnameValidate() && emailValidate() && passwordValidate()){
    return true
}
else{
    return false
}

}










// //email validation starts

// function emailValidate(){
//     let email=document.getElementById('email').value
//     let position=email.search("@gmail.com")
//     if(email==""){
//         displayMsg('email is mandatory','emailMsg','red')
//         return false
//     }
//     else if(position<0){
//         displayMsg('email must be in format someone@gmail.com','emailMsg','red')
//         return false
//     }
//     else{
//         displayMsg('valid email','emailMsg','green')
//         return true
//     }
// }
//email validation ends




















//password validation starts
// function passwordValidate(){
//     let password=document.getElementById('password').value
//     let passposition=password.search(["!@#$%^&*()_+?><:"])

//     if(password==""){
//         displayMsg('password is mandatory','passwordMsg','red')
//         return false
//     } 
//     else if(password.length<9){
//         displayMsg('please use strong password','passwordMsg','red')
//         return false
//     }
//     else if(passposition>=0){
//         displayMsg('Password valid','passwordMsg','green')
//         return true
//     }
  
//     else{
//         displayMsg('password must have one special character','passwordMsg','red')
//         return true
//     }
// }
//password validation ends

'use strict'

function signUp(){
    const userData = document.getElementsByClassName('validate');
    const userDataObj = {
        firstname: userData[0].value,
        lastname: userData[1].value,
        username: userData[2].value,
        email: userData[3].value,
        birthdate: userData[4].value,
        fcolor: userData[5].value,
        password: userData[6].value
    }
    
    if(localStorage.getItem(userDataObj.username)){
        alert('Este usuario ya existe!!!');
    } else if(validateForm(userData)){
        var json = JSON.stringify(userDataObj);
        localStorage.setItem(userDataObj.username, json);
        alert('User added!!');
    } else {
        alert('Ninguno de los campos puede estar vacio!!!');
    }
}
function validateForm(arr){
    let notEmpty = true;
    for(let i = 0; i < arr.length; i++){
        if(arr[i].value == ""){
            notEmpty = false;
        }
    }
    return notEmpty;
}




'use strict'

function login(){
    const loginData = document.getElementsByClassName('validate');
    const userFromLs = JSON.parse(localStorage.getItem(loginData[0].value));
    if(!userFromLs){
        alert('Este usuario no existe ');
    } else if(loginData[1].value != userFromLs.password){
        alert('Contraseña incorrecta!!!');
    } else if(!validateForm(loginData)) {
        alert("No puedes dejar ningun campo vacio!!!");
     } else {
        alert('Inicion de sesión exitoso');
        window.location = './pages/home.html';
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
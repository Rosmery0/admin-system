'use strict'

function recoverPassword(){
    const formData = document.getElementsByClassName('validate');
    const objLs = JSON.parse(localStorage.getItem(formData[0].value));

    if(!objLs){
        alert('Este usuario no existe!!!');
    } else if(formData[1].value != objLs.email){
        alert('Tu email no coincide!!!');
    } else if(!validateForm(formData)) {
        alert("No puedes dejar ningun campo vacio!!!");
    } else {
        let updatedUser = {
            firsname: objLs.firsname,
            lastname: objLs.lastname,
            username: objLs.username,
            email: objLs.email,
            birthdate: objLs.birthdate,
            fcolor: objLs.fcolor,
            password: formData[2].value

        }
        localStorage.setItem(formData[0].value, JSON.stringify(updatedUser));
        alert("Tu contraseña ha sido recuperada exitosamente!!!");
        window.location = '../index.html';
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


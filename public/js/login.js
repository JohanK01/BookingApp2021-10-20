'use strict';

function Loginfunction() {
    let inputEmail = document.getElementById('email').value;
    let inputPas = document.getElementById('pas').value;

    if (inputEmail == 'user' && inputPas == '123') {
         window.location.href = '/booking';
    } 
    else if(inputEmail == 'admin' && inputPas == '123'){
        window.location.href = '../html/admin.html';
    } 
    else{
        alert('That is not a valid account');
    }
}
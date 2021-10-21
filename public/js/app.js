'use strict';
let xhttp = new XMLHttpRequest;
xhttp.open('GET', '../data/user.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
    const data = xhttp.response;
    console.log(data);
    const pelikan = data['users']

    let div1 = document.createElement('p');
    div1.textContent = (pelikan.FirstName);

   document.getElementById('anka').appendChild(div1);
};
function myBookFunction() {
    document.getElementById('mybtn').innerHTML = "Bokat!";

};

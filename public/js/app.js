'use strict';
let xhttp = new XMLHttpRequest;
xhttp.open('GET', '../data/time.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
        const data = xhttp.response;
        console.log(data);
        
        const form1 = document.createElement('form');
        const tbox1 = document.createElement('input');
        const btnBoka = document.createElement('button');
        
        btnBoka.id = 'btnBokaId';
        btnBoka.textContent = 'Boka';
        btnBoka.addEventListener('click', myBoka);
        
        tbox1.id = 'timeId';
        tbox1.name = 'timeName';
        form1.id = 'formId';
        form1.action = '/booking';
        form1.method = 'POST';

        tbox1.value = data.time;
        
        document.getElementById('strukture').appendChild(form1);
        document.getElementById('formId').appendChild(tbox1);
        document.getElementById('formId').appendChild(btnBoka);
};

function myBoka() {
   alert('Bokat!')
}
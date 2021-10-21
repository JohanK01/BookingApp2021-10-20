'use strict';
let xhttp = new XMLHttpRequest;
xhttp.open('GET', '../data/time.json');
xhttp.responseType = 'json';
xhttp.send();

xhttp.onload = () => {
        const data = xhttp.response;
        console.log(data);

        const TimeInfo = document.createElement('p');

        TimeInfo.textContent = data.time;

        document.getElementById('TimeMonday').appendChild(TimeInfo);

      
};
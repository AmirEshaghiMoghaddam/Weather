const timeZone = document.querySelector('.location-timezone');
const country = document.querySelector('.location-country');
const icon = document.querySelector('.location p');
const temperature = document.querySelector('.degree-section .degree');
const description = document.querySelector('.description');


window.addEventListener('load', () => {
     let long;
     let lat;


     if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
               long = position.coords.longitude;
               lat = position.coords.latitude;
               const api = `http://api.weatherapi.com/v1/current.json?key=0902102e4d194eada95230947231004&q=${lat},${long}&aqi=no`;
               fetch(api)
                    .then(res => {
                         return res.json();
                    })
                    .then(data => {
                         console.log(data);
                         timeZone.textContent = data.location.name;
                         country.textContent = data.location.country;
                         temperature.textContent = data.current.temp_c;
                         description.textContent = data.current.condition.text;
                    });
          });
     }

});
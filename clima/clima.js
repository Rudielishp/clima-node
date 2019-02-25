const axios = require('axios'); 

const getClima = async(lat,lng) => {

    let encodeUrlClima = encodeURI(lat,lng);
    let ressult = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a0c274fe47ca244dab52989ef99fe9cc`) 
    let temperatura = ressult.data.main.temp;    
    return temperatura;
} 

module.exports = {
    getClima
} 


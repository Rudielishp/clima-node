//const axios = require('axios');
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options(
    {
        direccion: {
            alias: 'd',
            desc:'Direccion de la ciudad para obtener el clima',
            demand: true
        }
    }).argv;

let getInfo = async(direccion) => {  
    try {
        let coords = await lugar.getLugarLatLng(argv.direccion);
    let temp = await clima.getClima(coords.lag,coords.lng);

    return `el clima en ${coords.direccion} es de  ${temp}` ;

    } catch (e) {
        return `no se pudo determinar el clima en  ${direccion}`;
    }
    
}

getInfo(argv.direccion)
.then( mensaje => console.log(mensaje))
.catch(e => console.log(e));
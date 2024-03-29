import Sensor from "./Sensor";
import fetchTemperature from "./fetch/fetchTemperature";
import generateDataSensor from "./utils/generateDataSensor";

function runEverySecond() {
    const dataSensor = generateDataSensor();
    const sensor = new Sensor(dataSensor);
    
    const temperature = sensor.getTemperature();
    
    if (temperature) { 
        console.log( fetchTemperature(temperature) );
    }
};

setInterval(runEverySecond, 1000);
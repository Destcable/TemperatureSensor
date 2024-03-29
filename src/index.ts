import Sensor from "./Sensor";
import generateDataSensor from "./utils/generateDataSensor";

const dataSensor = generateDataSensor();
const sensor = new Sensor(dataSensor);
console.log(sensor.getTemperature());
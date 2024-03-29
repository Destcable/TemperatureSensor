import Sensor from "./Sensor";
import fetchTemperature from "./fetch/fetchTemperature";
import generateDataSensor from "./utils/generateDataSensor";
import { getFormattedDateTime } from "./utils/getFormattedDateTime";

function App() { 
    const dataSensor = generateDataSensor();
    const sensor = new Sensor(dataSensor);
    
    const temperature = sensor.getTemperature();
    if (temperature) {
        console.log(`[${getFormattedDateTime}] ${fetchTemperature(temperature)}: ${temperature} °C`);
    }
};

export default App;
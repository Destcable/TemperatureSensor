import Sensor from "./Sensor";
import fetchHumidity from "./fetch/fetchHumidity";
import fetchPressure from "./fetch/fetchPressure";
import fetchTemperature from "./fetch/fetchTemperature";
import generateDataSensor from "./utils/generateDataSensor";

function App() { 
    const dataSensor = generateDataSensor();
    const sensor = new Sensor(dataSensor);
    
    const temperature = sensor.getTemperature();
    const pressure = sensor.getPressure();
    const humidity = sensor.getHumidity();

    const getFormattedDateTime = new Date().toLocaleString();

    if (temperature) {
        console.log(`[${getFormattedDateTime}] ${fetchTemperature(temperature)}: ${temperature} °C`);
    }

    if (pressure) { 
        console.log(`[${getFormattedDateTime}] ${fetchPressure(pressure)}: ${pressure}`);
    }

    if (humidity) { 
        console.log(`[${getFormattedDateTime}] ${fetchHumidity(humidity)}: ${humidity}`);
    }
};

export default App;
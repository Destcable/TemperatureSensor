import { MAX_HUMIDITY, MAX_PRESSURE, MAX_TEMPERATURE, MIN_HUMIDITY, MIN_PRESSURE, MIN_TEMPERATURE } from "../config";
import randomInteger from "./randomInteger";

function generateDataSensor(): [number, number, number] { 
    const temperature = parseFloat(
        randomInteger(MIN_TEMPERATURE, MAX_TEMPERATURE).toFixed(2)
    );
    const humimdity  = parseFloat(
        randomInteger(MIN_HUMIDITY, MAX_HUMIDITY).toFixed(2)
    );
    const pressure = parseFloat( 
        randomInteger(MIN_PRESSURE, MAX_PRESSURE).toFixed(2)
    );

    return [temperature, humimdity, pressure];
};

export default generateDataSensor;
import { WARNING_MAX_TEMPERATURE, WARNING_MIN_TEMPERATURE } from "../config";

function fetchTemperature(temperatue: number): string  {
    if (temperatue >= WARNING_MAX_TEMPERATURE) { 
        return `[ОПАСНО] Достигнута максимальная норма температуры: ${temperatue} °C`;
    }

    if (temperatue <= WARNING_MIN_TEMPERATURE) {
        return `[ОПАСНО] Достигнута минимальная норма температуры: ${temperatue} °C`;
    }

    return '[БЕЗОПАСНО] Показатели температуры в пределах нормы';
};

export default fetchTemperature;
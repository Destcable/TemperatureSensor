import { WARNING_MAX_HUMIDITY, WARNING_MIN_HUMIDITY } from "../config";

function fetchHumidity(humidity: number) { 
    if (humidity >= WARNING_MAX_HUMIDITY) { 
        return `[ОПАСНО] Достигнута максимальная норма влажности`;
    }

    if (humidity <= WARNING_MIN_HUMIDITY) { 
        return `[ОПАСНО] Достигнута минимальная норма влажности`;
    }

    return '[БЕЗОПАСНО] Показатели влажности в пределах нормы';
};

export default fetchHumidity;
import { WARNING_MAX_PRESSURE, WARNING_MIN_PRESSURE } from "../config";

function fetchPressure(pressure: number) {
    if (pressure >= WARNING_MAX_PRESSURE) { 
        return `[ОПАСНО] Достигнута максимальная норма давления`;
    }

    if (pressure <= WARNING_MIN_PRESSURE) { 
        return `[ОПАСНО] Достигнута минимальная норма давления`;
    }

    return '[БЕЗОПАСНО] Показатели давления в пределах нормы';
};

export default fetchPressure;
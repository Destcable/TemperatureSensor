class Sensor {
    data: [number, number, number] | [] = [];

    constructor(data: [number, number, number]) {
        this.data = data;
    }

    // Температура
    getTemperature(): number | undefined {
        if (this.data[0]) return this.data[0];
        return undefined;
    }

    // Давление
    getPressure(): number | undefined {
        if (this.data[2]) return this.data[2];
        return undefined;
    }
    // Влажности
    getHumidity(): number | undefined {
        if (this.data[1]) return this.data[1];
        return undefined;
    }
};

export default Sensor;

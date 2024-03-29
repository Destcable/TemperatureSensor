class Sensor {
    data: [number, number, number] | [] = [];

    constructor(data: [number, number, number]) {
        this.data = data;
    }

    getTemperature(): number | undefined {
        if (this.data[0]) return this.data[0];
        return undefined;
    }

    getHumidity(): number | undefined {
        if (this.data[1]) return this.data[1];
        return undefined;
    }

    getPressure(): number | undefined {
        if (this.data[2]) return this.data[2];
        return undefined;
    }
};

export default Sensor;

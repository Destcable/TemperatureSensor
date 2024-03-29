class Sensor {
    data: [number, number, number] | [] = [];

    constructor(data: [number, number, number]) {
        this.data[0] = data[0];
        this.data[1] = data[1];
        this.data[2] = data[2];
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

export interface Device {
    id: string;
    name: string;
    status: string;
    lastConnection: string;
}

export interface Crop {
    name: string;
    plantingDate: string;
    status: string;
}

export interface Sensor {
    deviceID: string;
    sensorName: string;
    value: number;
    unit: string;
    difference: number;
    timestamp: string;
    imagePath: string;
    sensorIndex?: number;
}

export interface PlotInfo {
    name: string;
    plotName: string;
    location: string;
    area: number;
}
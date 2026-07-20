export interface Device {
    id: string;
    name: string;
    status: string;
    lastConnection: string;
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
    id: number;
    name: string;
    location: string;
    area: number;
    activeCrops?: ActiveCrop[];
    devices: Device[];
}

export interface ActiveCrop {
    id: number;
    cropTypeId: number;
    plantedAt: string;
    state: string;
}
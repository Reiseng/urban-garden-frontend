export interface SensorHistoryPoint {
    value: number;
    timestamp: string;
}

export interface Sensor {
    deviceID: string;
    sensorName: string;
    value: number;
    unit: string;
    difference?: number;
    timestamp: string;
    imagePath?: string;
    sensorIndex?: number;
    history?: SensorHistoryPoint[];
}
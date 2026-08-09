import type { Device } from "./devices";
import type { PlantedCrop } from "./plantedcrop";
export interface PlotSummary {
    id: number;
    name: string;
    size: number;
    devices: Device[];
    plantedCrops: PlantedCrop[];
}

export interface PlotInfo extends PlotSummary {
    location: Location;
}
export interface Location {
    city: string;
    zipCode: string;
    state: string;
    street: string;
}
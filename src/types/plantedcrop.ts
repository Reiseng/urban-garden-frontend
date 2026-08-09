import type { CropType } from "./croptype";

export interface PlantedCrop {
    id: number;
    cropType: CropType;
    plantedAt: string;
    state: string;
}
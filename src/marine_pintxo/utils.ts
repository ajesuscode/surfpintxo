import { HourlyMarineData } from "../types/marineTypes";

export const getWaveHeight = (
    data: HourlyMarineData,
    currentTime: string
): number => {
    const currentIndex = data.hourly.time.findIndex(
        (time) => time === currentTime
    );
    return data.hourly.wave_height[currentIndex];
};

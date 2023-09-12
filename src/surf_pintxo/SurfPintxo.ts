import Pintxo from "../pintxo/Pintxo";
import MarinePintxo from "../marine_pintxo/MarinePintxo";
import MeteoPintxo from "../meteo_pintxo/MeteoPintxo";

//types
import { PintxoMeteoData, PintxoMeteoParameters } from "../types/meteoTypes";
import { HourlyMarineData, PintxoMarineParameters } from "../types/marineTypes";

export default class SurfPintxo extends Pintxo {
    marinePintxo: MarinePintxo;
    meteoPintxo: MeteoPintxo;

    constructor(
        latitude: number,
        longitude: number,
        marineParams: PintxoMarineParameters,
        meteoParams: PintxoMeteoParameters
    ) {
        super(latitude, longitude);
        this.marinePintxo = new MarinePintxo(latitude, longitude, marineParams);
        this.meteoPintxo = new MeteoPintxo(latitude, longitude, meteoParams);
    }

    //Populates internal state of the SurfPintxo objext with data
    async fetchData(): Promise<{
        marineData: HourlyMarineData | null;
        meteoData: PintxoMeteoData | null;
    }> {
        // Replace 'any' with the actual types
        try {
            await Promise.all([
                this.marinePintxo.fetchMarineData(),
                this.meteoPintxo.fetchMeteoData(),
            ]);
            return {
                marineData: this.marinePintxo.marineData,
                meteoData: this.meteoPintxo.meteoData,
            };
        } catch (error) {
            throw new Error(String(error));
        }
    }

    // currentConditions(): any {
    //     // Replace 'any' with the actual type
    //     if (
    //         this.marinePintxo.marineData === null ||
    //         this.meteoPintxo.meteoData === null
    //     ) {
    //         throw new Error("Data is not set yet. First call fetchData().");
    //     }

    //     const currentTime = new Date().toISOString().split("T")[0] + "T00:00";
    //     const waveHeight = getWaveHeight(
    //         this.marinePintxo.marineData,
    //         currentTime
    //     );
    //     // Add more conditions from meteoData

    //     return {
    //         waveHeight,
    //         // Add more conditions
    //     };
    // }
}

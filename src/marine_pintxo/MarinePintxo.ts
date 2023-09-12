import Pintxo from "../pintxo/Pintxo";
import { PintxoMarineParameters, HourlyMarineData } from "../types/marineTypes";
import { getWaveHeight } from "./utils";

export default class MarinePintxo extends Pintxo {
    parameters: PintxoMarineParameters;
    marineData: HourlyMarineData | null = null;

    static defaultParameters: PintxoMarineParameters = {
        wave_direction: true,
        wave_height: true,
        wave_period: true,
    };

    constructor(
        latitude: number,
        longitude: number,
        parameters: PintxoMarineParameters
    ) {
        super(latitude, longitude);
        if (parameters && Object.keys(parameters).length > 0) {
            console.log("MarinePintxo received parameters:", parameters);
            this.parameters = parameters;
        } else {
            console.log("MarinePintxo using default parameters.");
            this.parameters = MarinePintxo.defaultParameters;
        }
    }

    async fetchMarineData(): Promise<HourlyMarineData> {
        const params = Object.keys(this.parameters)
            .filter(
                (key) => this.parameters[key as keyof PintxoMarineParameters]
            )
            .join(",");
        const apiUrl = `https://marine-api.open-meteo.com/v1/marine?latitude=${this.latitude}&longitude=${this.longitude}&hourly=${params}`;
        this.marineData = await this.fetchApiData<HourlyMarineData>(apiUrl);
        return this.marineData;
    }

    currentWaveHeight(): number {
        if (this.marineData === null) {
            throw new Error(
                "Marine data is not set yet. First call fetchMarineData()."
            );
        }
        const currentTime = new Date().toISOString().split("T")[0] + "T00:00";
        return getWaveHeight(this.marineData, currentTime);
    }
}

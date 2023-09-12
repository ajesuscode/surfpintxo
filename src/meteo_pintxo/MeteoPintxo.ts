import Pintxo from "../pintxo/Pintxo";
import { PintxoMeteoParameters, PintxoMeteoData } from "../types/meteoTypes";

export default class MeteoPintxo extends Pintxo {
    parameters: PintxoMeteoParameters;
    meteoData: PintxoMeteoData | null = null; // Replace 'any' with the actual type

    // Default parameters
    static defaultParameters: PintxoMeteoParameters = {
        hourly: ["windspeed_10m", "winddirection_10m", "temperature_2m"],
        daily: [],
        current_weather: false,
    };

    constructor(
        latitude: number,
        longitude: number,
        parameters: Partial<PintxoMeteoParameters> = {}
    ) {
        super(latitude, longitude);
        console.log("MeteoPintxo received parameters:", parameters);
        if (parameters && Object.keys(parameters).length > 0) {
            // If specific parameters are provided, use them
            this.parameters = {
                ...parameters,
                hourly: parameters.hourly ?? [],
                daily: parameters.daily ?? [],
                current_weather: parameters.current_weather ?? false,
            };
        } else {
            // Otherwise, use the default parameters
            this.parameters = MeteoPintxo.defaultParameters;
        }
    }

    async fetchMeteoData(): Promise<PintxoMeteoData> {
        const { hourly, daily, current_weather } = this.parameters;
        console.log(hourly, daily, current_weather);

        let apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}`;

        if (hourly && hourly.length > 0) {
            apiUrl += `&hourly=${hourly.join(",")}`;
        }

        if (daily && daily.length > 0) {
            apiUrl += `&daily=${daily.join(",")}`;
        }

        if (current_weather) {
            apiUrl += "&current_weather=true";
        }

        // Add more parameters as needed

        this.meteoData = await this.fetchApiData<PintxoMeteoData>(apiUrl);
        return this.meteoData;
    }

    // Add utility methods like currentTemperature, currentWindSpeed, etc.
}

export type PintxoMarineParameters = {
    wave_height: boolean;
    wave_direction: boolean;
    wave_period: boolean;
    wind_wave_height?: boolean;
    wind_wave_direction?: boolean;
    wind_wave_period?: boolean;
    wind_wave_peak_period?: boolean;
    swell_wave_height?: boolean;
    swell_wave_direction?: boolean;
    swell_wave_period?: boolean;
    swell_wave_peak_period?: boolean;
};

export type HourlyMarineData = {
    hourly_units: {
        time: "iso8601";
        wave_height: "m";
        wave_direction: "°";
        wave_period: "s";
        wind_wave_height: "m";
        wind_wave_direction: "°";
        wind_wave_period: "s";
        wind_wave_peak_period: "s";
        swell_wave_height: "m";
        swell_wave_direction: "°";
        swell_wave_peak_period: "s";
        swell_wave_period: "s";
    };
    hourly: {
        time: string[];
        wave_height: number[];
        wave_direction: number[];
        wave_period: number[];
        wind_wave_height?: number[];
        wind_wave_direction?: number[];
        wind_wave_period?: number[];
        wind_wave_peak_period?: number[];
        swell_wave_height?: number[];
        swell_wave_direction?: number[];
        swell_wave_peak_period?: number[];
        swell_wave_period?: number[];
    };
};

export type HourlyMeteoParams =
    | "temperature_2m"
    | "relativehumidity_2m"
    | "apparent_temperature"
    | "rain"
    | "showers"
    | "snowfall"
    | "pressure_msl"
    | "surface_pressure"
    | "cloudcover"
    | "visibility"
    | "windspeed_10m"
    | "winddirection_10m"
    | "windgusts_10m"
    | "uv_index"
    | "is_day";

export type DailyMeteoParams =
    | "temperature_2m_max"
    | "temperature_2m_min"
    | "sunrise"
    | "sunset"
    | "uv_index_max"
    | "rain_sum"
    | "showers_sum"
    | "snowfall_sum";

export interface PintxoMeteoParameters {
    hourly?: HourlyMeteoParams[] | null;
    daily?: DailyMeteoParams[] | null;
    current_weather?: boolean | null;
}

export interface PintxoMeteoData {
    current_weather?: CurrentMeteoData;
    hourly?: HourlyMeteoData;
    hourly_units?: HourlyMeteoData;
    daily?: DailyMeteoData;
}

export interface CurrentMeteoData {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
    time: string;
}
export interface HourlyMeteoUnits {
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
    apparent_temperature: string;
    rain: string;
    showers: string;
    snowfall: string;
    pressure_msl: string;
    surface_pressure: string;
    cloudcover: string;
    visibility: string;
    windspeed_10m: string;
    winddirection_10m: string;
    windgusts_10m: string;
    uv_index: string;
    is_day: string;
}

export interface HourlyMeteoData {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    apparent_temperature: number[];
    rain: number[];
    showers: number[];
    snowfall: number[];
    pressure_msl: number[];
    surface_pressure: number[];
    cloudcover: number[];
    visibility: number[];
    windspeed_10m: number[];
    winddirection_10m: number[];
    windgusts_10m: number[];
    uv_index: number[];
    is_day: number[];
}

export interface DailyMeteoData {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    uv_index_max: number[];
    rain_sum: number[];
    showers_sum: number[];
    snowfall_sum: number[];
}

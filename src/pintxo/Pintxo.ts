export default abstract class Pintxo {
    latitude: number;
    longitude: number;

    constructor(latitude: number, longitude: number) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    protected async fetchApiData<T>(apiUrl: string): Promise<T> {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(
                    `API request failed: ${response.status} - ${response.statusText}`
                );
            }
            return (await response.json()) as T;
        } catch (error) {
            console.error(`Error fetching data from ${apiUrl}:`, error);
            throw error;
        }
    }
}

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
                const responseBody = await response.json(); // Assuming the API returns JSON
                if (responseBody.error && responseBody.reason) {
                    console.error(`API Error: ${responseBody.reason}`);
                    throw new Error(`API Error: ${responseBody.reason}`);
                } else {
                    throw new Error(
                        `API request failed: ${response.status} - ${response.statusText}`
                    );
                }
            }
            return await response.json();
        } catch (error) {
            console.error(`Error fetching data from ${apiUrl}:`, error);
            throw error;
        }
    }
}

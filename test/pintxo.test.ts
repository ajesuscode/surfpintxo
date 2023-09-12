// Unit Test
import { describe, it, expect, spyOn } from "bun:test";
import Pintxo from "../src/pintxo/Pintxo";
describe("Pintxo", () => {
    it("should fetch API data successfully", async () => {
        const pintxo = new Pintxo(43.457, -1.581);
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=43.457&longitude=-1.581`;
        const data = await pintxo.fetchApiData(apiUrl);
        expect(data).toBeDefined();
    });

    it("should throw an error when API request fails", async () => {
        const pintxo = new Pintxo(43.457, -1.581);
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=43.457&longitude=-1.581`;
        // Simulate a failed API request
        spyOn(window, "fetch").mockRejectedValueOnce(
            new Error("API request failed")
        );
        await expect(pintxo.fetchApiData(apiUrl)).rejects.toThrowError(
            "API request failed"
        );
    });
});

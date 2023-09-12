import SurfPintxo from "../dist/surf_pintxo/SurfPintxo";

const pintxo = new SurfPintxo(
    43.457,
    -1.581,
    { wave_direction: true },
    { current_weather: true }
);
console.log(pintxo);
const data = await pintxo.fetchData();
console.log("DATA", data);

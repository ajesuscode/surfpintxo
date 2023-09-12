import SurfPintxo from "../src/surf_pintxo/SurfPintxo";

const pintxo = new SurfPintxo(43.457, -1.581);
const data = await pintxo.fetchData();
console.log("DATA", data);

import ShipEngine from "shipengine";
const shipEngine = new ShipEngine({
    apiKey:process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY as string,
});
export default shipEngine;
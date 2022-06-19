
const waypoints = async (sidOrStar,airportICAO) => {
    const results=await fetch(`http://localhost:3333/airports/${sidOrStar}/waypoints?airport_icao=${airportICAO}`)
        .then(response => response.json())
    return results
};

export default waypoints
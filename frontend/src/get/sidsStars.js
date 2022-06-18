
const sidsStars = async (sidOrStar,airportICAO) => {
    const results=await fetch(`http://localhost:3333/airports/${sidOrStar}?airport_icao=${airportICAO}`)
        .then(response => response.json())
    return results
};

export default sidsStars
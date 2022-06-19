const sidsStars = async (sidOrStar,airportICAO) => {
    const results=await fetch(`http://a66745cd4ff2e4eea89473fd030825ee-912727064.ap-southeast-1.elb.amazonaws.com/airports/${sidOrStar}?airport_icao=${airportICAO}`)
        .then(response => response.json())
    return results
};

export default sidsStars
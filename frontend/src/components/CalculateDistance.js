function deg2rad(deg)
{
    return deg * (Math.PI/180);
}

function getDistance(pair1, pair2)
{
    const [lat1, lon1] = pair1, [lat2, lon2] = pair2;
    const R = 6371; // Radius of the earth in km.

    var dLat = deg2rad(lat2-lat1);
    var dLon = deg2rad(lon2-lon1);
    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    // Return distance in km.
    return R * c;
}



export default getDistance

import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import AirportMarker from './AirportMarker'
import * as React from 'react';
const Map = ({airports, hoveredAirport, height}) => {
    const [center, setCenter]=React.useState([1.1208333333333333,104.11861111111111])
    
    React.useEffect(()=>{
        const new_center=!hoveredAirport?  [1.1208333333333333,104.11861111111111]:[hoveredAirport.lat,hoveredAirport.lng]
        setCenter(new_center)
    },[hoveredAirport])

    function UpdateMapCentre(new_center) {
        const map = useMap();
        map.panTo(new_center.mapCentre);
        return null;
    }

    const displayAirportMarkers=airports.map((airport, index)=>{
        return (<AirportMarker lat={airport.lat} lng={airport.lng} key={index} />)
    })

    return (<MapContainer center={[1.1208333333333333,104.11861111111111]} zoom={13} scrollWheelZoom={false} style={{ height: height }}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {displayAirportMarkers}
        {<UpdateMapCentre mapCentre={center} />}
    </MapContainer>)
}

export default Map
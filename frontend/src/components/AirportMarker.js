import { MapContainer, TileLayer, Marker, Popup, Circle, CircleMarker} from 'react-leaflet'
const AirportMarker = ({lat,lng}) => {
    const redOptions = { color: 'red' }
    return (
    <>
        <CircleMarker center={[lat,lng]} pathOptions={redOptions} radius={40}>
            <Marker position={[lat,lng]}>
            </Marker>
        </CircleMarker>
    </>
)
}

export default AirportMarker
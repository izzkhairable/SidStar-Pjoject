import {  Polyline} from 'react-leaflet'
const SidStarLine = ({polyline}) => {
    // const randomHex=Math.floor(Math.random()*16777215).toString(16);
    // const redOptions = { color: `#${randomHex}` }
    const redOptions = { color: 'red' }
    return (
        <Polyline pathOptions={redOptions} positions={polyline} />

)
}

export default SidStarLine
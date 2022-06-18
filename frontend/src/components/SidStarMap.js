import { MapContainer, TileLayer, useMap, Polyline, CircleMarker, Marker} from 'react-leaflet'
// import AirportMarker from './AirportMarker'
import StarSidLine from './SidStarLine'
import L from 'leaflet';
import * as React from 'react';
const Map = ({sidsStars,selectedSidOrStarDropdown, selectedAirport,selectedSidOrStar}) => {
    const [polylineData, setPolylineData]=React.useState(null)
 

      React.useEffect(()=>{
            DisplayAirportMarkers()
    })

      React.useEffect(()=>{
            console.log("This is selected",selectedSidOrStarDropdown)
            
    }, [selectedSidOrStarDropdown])



    const DisplayAirportMarkers=()=>{
        if(selectedSidOrStarDropdown){
            
                let polylineSingle=[]
                selectedSidOrStarDropdown.waypoints.map((waypoint)=>{
                    polylineSingle.push([waypoint.lat, waypoint.lng])
                    return waypoint
                })
                if(selectedSidOrStar==='stars'){
                    polylineSingle.push([selectedAirport.lat, selectedAirport.lng])
                }else if(selectedSidOrStar==='sids'){
                    polylineSingle.unshift([selectedAirport.lat, selectedAirport.lng])
                }
                
            setPolylineData([polylineSingle])
        }
        else{
            const lines=sidsStars.map((sidOrStar)=>{
                let polyline=[[sidOrStar.airport.lat, sidOrStar.airport.lng]]
                sidOrStar.waypoints.map((waypoint)=>{
                    polyline.push([waypoint.lat, waypoint.lng])
                    return [waypoint.lat, waypoint.lng]
                })
                return polyline
            })
            setPolylineData(lines)
        }    
    }

    
    const MultiplePolyLine=()=>polylineData.map((polylineSingle)=>{
        // const randomHex=Math.floor(Math.random()*16777215).toString(16)
        return(<><Polyline pathOptions={{ color:'red' }} positions={polylineSingle} /> 
               </>)
    })

    const MultipleCircleMarkers=()=>polylineData.map((polylineSingle)=>{
        // const randomHex=Math.floor(Math.random()*16777215).toString(16)
        
        return polylineSingle.map((singlePoint, index)=>{
            let text = L.divIcon({html:  `<h1 align='center'>Point ${index+1}</h1>`});
    
            return (<CircleMarker center={singlePoint} pathOptions={{ color:'red' }} radius={10}>
                {selectedSidOrStarDropdown && (<Marker position={singlePoint} icon={text} />)}
            </CircleMarker>)
        })
    })




    return (polylineData!=null &&(<MapContainer center={[1.1208333333333333,104.11861111111111]} zoom={13} scrollWheelZoom={false} style={{ height: 500 }}>
        <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <displayAirportMarkers/> */}
        {/* <StarSidLine polyline={newSidsStars} /> */}
        {/* <StarSidLine polyline={polyline} /> */}
        {/* {hoveredAirport&&<UpdateMapCentre mapCentre={center} />} */}
        {/* <>{displayAirportMarkers}</> */}
        {/* {<UpdateMapCentre sidsStars={sidsStars} />} */}
        {/* <DisplayAirportMarkers/> */}
        <MultiplePolyLine/>
        <MultipleCircleMarkers/>
        {/* <Polyline pathOptions={{ color:'red' }} positions={polylineData} /> */}
    </MapContainer>))
}

export default Map
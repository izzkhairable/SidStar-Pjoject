import { MapContainer, TileLayer, useMap, Polyline, CircleMarker, Marker} from 'react-leaflet'
import L from 'leaflet';
import * as React from 'react';
import getDistance from './CalculateDistance';
const Map = ({sidsStars,selectedSidOrStarDropdown, selectedAirport,selectedSidOrStar, height}) => {
    const [polylineData, setPolylineData]=React.useState(null)
    const [center, setCenter]=React.useState([1.1208333333333333,104.11861111111111])
    const [isChangedCenter, setIsChangedCenter]=React.useState(false)
    
    function UpdateMapCentre(new_center) {
        
        const map = useMap();
        if( polylineData.length===1 && !isChangedCenter){
        let totalDistance=0
        for (let i = 1; i < polylineData[0].length; i++)
        {
            let pair1 = [polylineData[0][i-1][0], polylineData[0][i-1][1]];
            let pair2 = [polylineData[0][i][0],polylineData[0][i][1]];
            totalDistance+=getDistance(pair1, pair2)
        }
        map.panTo(new_center.mapCentre);
        console.log("PANNING!")
        map.setZoom((totalDistance>100&&7.5)||(totalDistance>70&&8)||(totalDistance>50&&9)||(totalDistance>0&&10))
        
        setPolylineData(null);
        setIsChangedCenter(true)
        return null;
        }else{
            map.panTo(new_center.mapCentre);
        }
    }
      React.useEffect(()=>{
            DisplayAirportMarkers()
    }, [selectedSidOrStarDropdown,polylineData])

      React.useEffect(()=>{
            if(selectedSidOrStarDropdown && polylineData.length===1){
                const position=Math.round(polylineData.length/2)
                setCenter(polylineData[0][position])
            }else{
                setCenter([selectedAirport.lat, selectedAirport.lng])
                setIsChangedCenter(false)
            }
            
    }, [selectedSidOrStarDropdown, polylineData])



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
        else if (selectedSidOrStarDropdown===null){
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
        return(<><Polyline pathOptions={{ color:'red' }} positions={polylineSingle} /> 
               </>)
    })

    const MultipleCircleMarkers=()=>polylineData.map((polylineSingle)=>{
        return polylineSingle.map((singlePoint, index)=>{
            let text = L.divIcon({html:  `<h1 align='center'>Point ${index+1}</h1>`});
    
            return (<CircleMarker center={singlePoint} pathOptions={{ color:'red' }} radius={10}>
                {selectedSidOrStarDropdown && (<Marker position={singlePoint} icon={text} />)}
            </CircleMarker>)
        })
    })




    return (polylineData!=null &&(<MapContainer center={[1.1208333333333333,104.11861111111111]} zoom={10} scrollWheelZoom={false} style={{ height: height }}>
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
        <UpdateMapCentre mapCentre={center} polyline={polylineData} />
        {/* <Polyline pathOptions={{ color:'red' }} positions={polylineData} /> */}
    </MapContainer>))
}

export default Map
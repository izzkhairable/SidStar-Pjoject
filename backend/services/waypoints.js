
const waypoints=(data)=>{
    let occurrenceMapping={}
    for (let sidOrStar of data) {
        for (let waypoint of sidOrStar.waypoints){
            const waypointUid=waypoint.uid
            if(occurrenceMapping.hasOwnProperty(waypointUid)){
                const current_count=occurrenceMapping[waypointUid]
                occurrenceMapping[waypointUid]=current_count+1
            }else{
                occurrenceMapping[waypointUid]=1
            }
        }
    }

    const sortedOccurrenceMapping = Object.entries(occurrenceMapping)
    .sort(([,a],[,b]) => b-a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

    let sortedOccurrenceArray=[]
    for (let waypoint in sortedOccurrenceMapping) {
        sortedOccurrenceArray.push({waypoint: waypoint, numberOfOccurrences: sortedOccurrenceMapping[waypoint]})
    }

    return sortedOccurrenceArray
}

module.exports = waypoints
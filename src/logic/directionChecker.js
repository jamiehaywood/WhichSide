export function directionChecker(stationObjects) {
    var origin = stationObjects[0]
    var dest = stationObjects[1]

    if (dest.hasOwnProperty('northbound' || 'southbound')) {
        return (origin.number > dest.number ? "northbound" : "southbound")
        }
    else if (dest.hasOwnProperty('eastbound' || 'westbound')) {
        return (origin.number > dest.number ? "westbound" : "eastbound") 
    }
}
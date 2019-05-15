import { data } from '../data/data.js'

export function whichSide(originStation, destinationStation, inputLine) {
    let stationObjects = stationObjectsRetriever(originStation, destinationStation, inputLine, data)
    let direction = directionChecker(stationObjects)
    let side = sideChecker(stationObjects, direction)
    return side;
}

export function stationObjectsRetriever(originStation, destinationStation, inputLine, data) {
    let stationObjects = [];
    // .filter? https://alligator.io/js/filter-array-method/
    for (const stationName in data) {
        if (data.hasOwnProperty(stationName)) {
            const element = data[stationName];
            if (element.stationName === originStation && element.lineName === inputLine) {
                let originStationObject = element
                stationObjects.splice(0, 0, originStationObject)
            }
            if (element.stationName === destinationStation && element.lineName === inputLine) {
                let destinationStationObject = element
                stationObjects.splice(1, 0, destinationStationObject)
            }
        }
    }
    return stationObjects
}

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

export function sideChecker(stationObjects, direction) {
    let destination = stationObjects[1]
    let side = destination[direction]
    return side
}


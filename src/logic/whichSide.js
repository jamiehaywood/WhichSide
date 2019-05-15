import { data } from '../data/data.js'

export function whichSide(origin, dest, input) {
    let direction = directionChecker(stationObjects)
    let side = sideChecker(stationObjects, direction)
    return side;
}

export function stationObjectsRetriever(origin, dest, input, data) {
    let stationObjects = [];
    //TO DO: .filter? https://alligator.io/js/filter-array-method/
    for (const stationName in data) {
        if (data.hasOwnProperty(stationName)) {
            const element = data[stationName];
            if (element.stationName === origin && element.lineName === input) {
                let originObject = element
                stationObjects.splice(0, 0, originObject)
            }
            if (element.stationName === dest && element.lineName === input) {
                let destObject = element
                stationObjects.splice(1, 0, destObject)
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


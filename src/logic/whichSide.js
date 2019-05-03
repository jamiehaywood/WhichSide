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
    var originStation = stationObjects[0]
    var destinationStation = stationObjects[1]
    var direction; // take out variable and return direction in ternary

    if (destinationStation.hasOwnProperty('northbound' || 'southbound')) {
        if (originStation.number > destinationStation.number) {
            direction = "northbound"
        }
        else {
            direction = "southbound"
        }
    }
    else if (destinationStation.hasOwnProperty('eastbound' || 'westbound')) {
        if (originStation.number > destinationStation.number) {
            direction = "westbound"
        }
        else {
            direction = "eastbound"
        }
    }
    return direction
}

export function sideChecker(stationObjects, direction) {
    let destination = stationObjects[1]
    let side = destination[direction]
    return side
}


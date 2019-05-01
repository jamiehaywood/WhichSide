import { data } from '../data/data.js'

export function whichSide(originStation, destinationStation, inputLine) {
    let stations = stationObjectsCreator(data)
    let stationObjects = stationObjectRetriever(originStation, destinationStation, inputLine, stations)
    let direction = directionChecker(stationObjects)
    let side = sideChecker(stationObjects, direction)
    return side;
}
export function stationObjectsCreator(data) {
    let stations = []
    for (var line in data.lines) {
        var i = 0;
        for (const station in data.lines[line]) {
            if (data.lines[line].hasOwnProperty(station)) {
                var stationObject = {}
                stationObject["lineName"] = line
                stationObject["stationName"] = station
                var layout = data.lines[line][station].layout;

                if (layout.includes("N=") && layout.includes("S=")) {
                    stationObject["northbound"] = "rhs"
                    stationObject["southbound"] = "lhs"
                }
                else if (layout.includes("=N") && layout.includes("S=")) {
                    stationObject["northbound"] = "lhs"
                    stationObject["southbound"] = "lhs"
                }
                else if (layout.includes("N=") && layout.includes("=S")) {
                    stationObject["northbound"] = "rhs"
                    stationObject["southbound"] = "rhs"
                }
                else if (layout.includes("=N") && layout.includes("=S")) {
                    stationObject["northbound"] = "lhs"
                    stationObject["southbound"] = "rhs"
                }

                else if (layout.includes("E=") && layout.includes("W=")) {
                    stationObject["eastbound"] = "lhs"
                    stationObject["westbound"] = "rhs"
                }
                else if (layout.includes("=E") && layout.includes("W=")) {
                    stationObject["eastbound"] = "rhs"
                    stationObject["westbound"] = "rhs"
                }
                else if (layout.includes("=E") && layout.includes("=W")) {
                    stationObject["eastbound"] = "rhs"
                    stationObject["westbound"] = "lhs"
                }
                else if (layout.includes("E=") && layout.includes("=W")) {
                    stationObject["eastbound"] = "lhs"
                    stationObject["westbound"] = "lhs"
                }
                stationObject["number"] = i + 1;
                i++
            }
            stations.push(stationObject)
        }
    }
    return stations
}

export function stationObjectRetriever(originStation, destinationStation, inputLine, stations) {
    let stationObjects = []
    for (const stationName in stations) {
        if (stations.hasOwnProperty(stationName)) {
            const element = stations[stationName];
            if (element.stationName === originStation && element.lineName === inputLine) {
                let originStationObject = element
                stationObjects.splice(0,0,originStationObject)
            }
            if (element.stationName === destinationStation && element.lineName === inputLine) {
                let destinationStationObject = element
                stationObjects.splice(1,0,destinationStationObject)
            }
        }
    }
    return stationObjects
}

export function directionChecker(stationObjects) {
    let originStation = stationObjects[0]
    let destinationStation = stationObjects[1]
    let direction;
    if (destinationStation.hasOwnProperty('northbound' || 'southbound')) {
        if (originStation.number > destinationStation.number){
            direction = "northbound"
        }
        else{
            direction = "southbound"
        }
    }
    else if (destinationStation.hasOwnProperty('eastbound' || 'westbound')) {
        if (originStation.number > destinationStation.number){
            direction = "westbound"
        }
        else{
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


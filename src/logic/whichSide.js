import { data } from '../data/data.js'


export function whichSide(originStation, destinationStation, inputLine) {
    let stations = stationObjectsCreator()
    let stationsIndex = indexGenerator(originStation, destinationStation, inputLine, stations)
    let direction = directionChecker(stationsIndex)
    let side = sideChecker(direction, stations, destinationStation)
    return side;
}

function stationObjectsCreator() {
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

function indexGenerator(originStation, destinationStation, inputLine, stations) {
    let stationsIndex = []
    for (const stationName in stations) {
        if (stations.hasOwnProperty(stationName)) {
            const element = stations[stationName];

            if (element.stationName === originStation && element.lineName === inputLine) {
                var number = element.number
            }
            if (element.stationName === destinationStation && element.lineName === inputLine) {
                var secondNumber = element.number;
            }
        }
    }
    stationsIndex.push(number)
    stationsIndex.push(secondNumber)
    return stationsIndex;
}

function directionChecker(stationsIndex) {
    let number = stationsIndex[0]
    let secondNumber = stationsIndex[1]

    if (number < secondNumber) {
        var direction = "southbound"
    }
    else if (number > secondNumber) {
        direction = "northbound"
    }
    return direction
}

function sideChecker(direction, stations, destinationStation) {
    for (const i in stations) {
        if (stations.hasOwnProperty(i)) {
            const element = stations[i];
            if (element.stationName===destinationStation){
                var side = element[direction]
                return side;
            }
        }
    }
}
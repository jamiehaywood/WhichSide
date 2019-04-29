import {data} from '../data/data.js'

export function whichSide(originStation, destinationStation, inputLine) {
    var stations = []
    var stationNames = [];
    for (var line in data.lines) {
        var i = 0;
        for (const station in data.lines[line]) {
            stationNames.push(station)
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

    for (const stationName in stations) {
        if (stations.hasOwnProperty(stationName)) {
            const element = stations[stationName];

            if (element.stationName === originStation && element.lineName === inputLine) {
                var number = element.number
                console.log(number + " " + element.stationName);
            }
            if (element.stationName === destinationStation && element.lineName === inputLine) {
                var secondNumber = element.number;
                destinationStation = element
                console.log(secondNumber + " " + element.stationName)
            }
        }
    }

    // TODO: Implement some sort of algorithm to detect nbound/southbound eastbound or westbound.

    if (number < secondNumber) {
        var direction = "southbound"
    }
    else if (number > secondNumber) {
        direction = "northbound"
    }
    var side = destinationStation[direction]

    return side;
}
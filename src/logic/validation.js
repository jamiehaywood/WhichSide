import { data } from '../data/data'

export function validate(originStation, destinationStation, inputLine) {
    var callback;

    isNotEmptyOrNullCheck(originStation, destinationStation, inputLine)

    function isNotEmptyOrNullCheck(originStation, destinationStation, inputLine){
    if (originStation && destinationStation && inputLine) {
        stationNameCheck(data)
    }
    else {
        alert("Please fill in all the fields")
        }
    }


    function stationNameCheck(data) {
        let stationNames = data.map(a => a.stationName)
        let lineNames = data.map(b => b.lineName)

        if (stationNames.includes(originStation) &&
            stationNames.includes(destinationStation) &&
            lineNames.includes(inputLine)) {
            callback = true;
            }
        else {
            alert("Please check your station and line names")
        }
    }
    return callback
}
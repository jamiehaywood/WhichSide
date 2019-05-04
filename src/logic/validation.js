import { data } from '../data/data'

export function validate(originStation, destinationStation, inputLine) {

    // Checking if input is not null or empty using truthy
    if (originStation && destinationStation && inputLine) {
        stationNameCheck(data)
    }
    else {
        alert("Please fill in all the fields")
        return false;
    }

    function stationNameCheck(data) {
        let stationNames = data.map(a => a.stationName)
        let lineNames = data.map(b => b.lineName)

        if (stationNames.includes(originStation) &&
            stationNames.includes(destinationStation) &&
            lineNames.includes(inputLine)) {
            return true
            }
        else {
            alert("Please check your station and line names")
            return false
        }
    }
}
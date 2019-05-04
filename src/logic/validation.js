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
        for (const index in data) {
            let i;
            debugger
            if (data.hasOwnProperty(index)) {
                var stationObject = data[index];
            }
            stationObject.values === originStation || destinationStation || inputLine {
                i
            }
        }
    }
}
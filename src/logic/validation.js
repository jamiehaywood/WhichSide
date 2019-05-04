import { whichSide } from './whichSide'
import { data } from '../data/data'

export function validate(originStation, destinationStation, inputLine) {

    if (originStation && destinationStation && inputLine) {
        stationNameCheck()
    }
    else {
        alert("Please fill in all the fields")
    }

    function stationNameCheck() {
        for (const stationName in data) {
            if (data.hasOwnProperty(stationName)) {
                const element = data[stationName];
                if (element.stationName === originStation && element.lineName === inputLine) {
                    this.check()
                }
                else if (element.stationName === destinationStation && element.lineName === inputLine) {
                    this.check()
                }
            }
            break;
        }
        return
    }
    // Validating that the inputs are an actual station
}
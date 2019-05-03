import { whichSide } from './whichSide'
import { data } from '../data/data'

export function validate(thisState) {
    let originStation = thisState.originStation
    let destinationStation = thisState.destinationStation
    let inputLine = thisState.line

    (originStation) && (destinationStation) && (inputLine) ? stationNameCheck() : false

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
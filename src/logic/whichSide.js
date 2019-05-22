import { data } from '../data/data.js'
import { stationObjectsRetriever } from '../logic/stationObjectRetriever'
import { directionChecker } from '../logic/directionChecker'
import { sideChecker } from '../logic/sideChecker'

export function whichSide(origin, dest, input) {
    let stationObjects = stationObjectsRetriever(origin, dest, input, data)
    let direction = directionChecker(stationObjects)
    return sideChecker(stationObjects, direction)
}

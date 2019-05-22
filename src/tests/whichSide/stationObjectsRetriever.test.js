import {data} from '../../data/data'
import {stationObjectsRetriever} from '../../logic/whichSide'


test('an array of two items is returned', () => {
    let origin = "Redbridge"
    let dest = "Paddington"
    let input = "Central"
    expect(stationObjectsRetriever(origin, dest, input, data)).toHaveLength(2)
 })
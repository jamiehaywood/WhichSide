import { data } from '../../data/data'
import { stationObjectsRetriever } from '../../logic/stationObjectRetriever'

test('an array of two items is returned', () => {
    let origin = "Redbridge"
    let dest = "Chigwell"
    let input = "Central"
    expect(stationObjectsRetriever(origin, dest, input, data)).toHaveLength(2)
 })

test('the array returned contains two specified station objects', () => {
    let origin = "Redbridge"
    let dest = "Chigwell"
    let input = "Central"
    expect(stationObjectsRetriever(origin, dest, input, data)).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
                "lineName": "Central",
                "stationName": "Chigwell",
                "eastbound": "rhs",
                "westbound": "rhs",
                "number": 48
            }),
            expect.objectContaining({
                "lineName": "Central",
                "stationName": "Redbridge",
                "eastbound": "lhs",
                "westbound": "lhs",
                "number": 41
            })
        ])
    )
})

// TODO: Add a test to check the position of the objects in the array(origin first, destination second)

test('empty origin input returns false', () => {
    let origin = ""
    let dest = "Chigwell"
    let input = "Central"
    expect(stationObjectsRetriever(origin, dest, input, data)).toBeFalsy()
})

test('empty destination input returns false', () => {
    let origin = "Redbridge"
    let dest = ""
    let input = "Central"
    expect(stationObjectsRetriever(origin, dest, input, data)).toBeFalsy()
})

test('empty line input returns false', () => {
    let origin = "Redbridge"
    let dest = "Chigwell"
    let input = ""
    expect(stationObjectsRetriever(origin, dest, input, data)).toBeFalsy()
})

test('stations on different lines return false', () => {
    let origin = "Redbridge"
    let dest = "Piccadilly Circus"
    let input = "Central"
    expect(stationObjectsRetriever(origin, dest, input, data)).toBeFalsy()
})
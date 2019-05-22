import { sideChecker } from '../../logic/sideChecker'

test('correctly finds side westbound', () => {
    let direction = "westbound"
    let stationObjects =
        [
            {},
            { eastbound: "rhs", westbound: "lhs", number: 1 }
        ]
    expect(sideChecker(stationObjects, direction)).toEqual("lhs")
})

test('correctly finds side eastbound', () => {
    let direction = "eastbound"
    let stationObjects =
        [
            {},
            { eastbound: "rhs", westbound: "lhs", number: 1 }
        ]
    expect(sideChecker(stationObjects, direction)).toEqual("rhs")
})

test('correctly finds side eastbound', () => {
    let direction = "southbound"
    let stationObjects =
        [
            {},
            { northbound: "rhs", southbound: "lhs", number: 1 }
        ]
    expect(sideChecker(stationObjects, direction)).toEqual("lhs")
})

test('correctly finds side eastbound', () => {
    let direction = "northbound"
    let stationObjects =
        [
            {},
            { northbound: "rhs", southbound: "lhs", number: 1 }
        ]
    expect(sideChecker(stationObjects, direction)).toEqual("rhs")
})
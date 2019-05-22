import { data } from '../data/data'

export function validate(origin, dest, input) {
    return ((isNotEmptyOrNullCheck(origin, dest, input)) &&
            (stationNameCheck(data, origin, dest, input)))
    }

export function isNotEmptyOrNullCheck(origin, dest, input) {
    return (origin && dest && input) ? true : false
}

export function stationNameCheck(data, origin, dest, input) {
    let stationNames = data.map(a => a.stationName)
    let lineNames = data.map(b => b.lineName)
    return (stationNames.includes(origin) &&
            stationNames.includes(dest) &&
            lineNames.includes(input))
}
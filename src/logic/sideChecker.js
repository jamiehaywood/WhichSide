export function sideChecker(stationObjects, direction) {
    let destination = stationObjects[1]
    let side = destination[direction]
    return side
}
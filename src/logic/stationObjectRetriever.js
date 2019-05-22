export function stationObjectsRetriever(origin, dest, input, data) {
    let stationObjects = [];
    //TO DO: .filter? https://alligator.io/js/filter-array-method/
    for (const stationName in data) {
        if (data.hasOwnProperty(stationName)) {
            const element = data[stationName];
            if (element.stationName === origin && element.lineName === input) {
                let originObject = element
                stationObjects.splice(0, 0, originObject)
            }
            if (element.stationName === dest && element.lineName === input) {
                let destObject = element
                stationObjects.splice(1, 0, destObject)
            }
        }
    }
    return stationObjects
}
import { stationObjectsCreator } from '../logic/whichSide'

const testData = {
    "lines": {
        "Picaloo": {
           "Early C": {
              "openside": {
                 "1": "left",
                 "2": "left"
              },
              "layout": "=NS==ns==ns=",
              "platforms": [
                 1,
                 2,
                 3,
                 4,
                 5,
                 6
              ]
           },
           "Hammy": {
              "openside": {
                 "1": "left",
                 "2": "left"
              },
              "layout": "=NS= nsns",
              "platforms": [
                 2,
                 1
              ]
           },
        }
    }
}
test('correctly creates station object', () => {
expect(stationObjectsCreator(testData)).toEqual(
   [
      {lineName: "Picaloo", stationName: "Early C", northbound: "lhs", southbound: "lhs", number: 1},
      {lineName: "Picaloo", stationName: "Hammy", northbound: "lhs", southbound: "lhs", number: 2}
   ]);
});
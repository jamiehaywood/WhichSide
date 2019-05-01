import { directionChecker } from '../logic/whichSide'

test('correctly finds direction as westbound', () => {
   let stations =
   [
      {lineName: "Picaloo", stationName: "Early C", eastbound: "rhs", westbound: "rhs", number: 2},
      {lineName: "Picaloo", stationName: "Hammy", eastbound: "lhs", westbound: "lhs", number: 1}
   ]
   expect(directionChecker(stations)).toEqual("westbound")
})


test('correctly finds direction as eastbound', () => {
   let stations =
   [
      {lineName: "Picaloo", stationName: "Hammy", eastbound: "lhs", wesftbound: "lhs", number: 2},
      {lineName: "Picaloo", stationName: "Greeny P", eastbound: "rhs", westbound: "rhs", number: 9}
   ]
   expect(directionChecker(stations)).toEqual("eastbound")
})


test('correctly finds direction as northbound', () => {
   let stations =
   [
      {lineName: "Bakerboo", stationName: "Kenty", northbound: "rhs", southbound: "rhs", number: 2},
      {lineName: "Bakerboo", stationName: "Waterloo", northbound: "lhs", southbound: "lhs", number: 23}
   ]
   expect(directionChecker(stations)).toEqual("southbound")
})


test('correctly finds direction as southbound', () => {
   let stations =
   [
      {lineName: "Bakerloo", stationName: "Ele&Castle", northbound: "rhs", southbound: "rhs", number: 25},
      {lineName: "Bakerloo", stationName: "Marylebone", northbound: "lhs", southbound: "lhs", number: 16}
   ]
   expect(directionChecker(stations)).toEqual("northbound")
})
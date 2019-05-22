import { directionChecker } from '../../logic/directionChecker'

test('correctly finds direction as westbound', () => {
   let stations =
   [
      {eastbound: "rhs", westbound: "rhs", number: 2},
      {eastbound: "lhs", westbound: "lhs", number: 1}
   ]
   expect(directionChecker(stations)).toEqual("westbound")
})

test('correctly finds direction as eastbound', () => {
   let stations =
   [
      {eastbound: "lhs", westbound: "lhs", number: 2},
      {eastbound: "rhs", westbound: "rhs", number: 9}
   ]
   expect(directionChecker(stations)).toEqual("eastbound")
})

test('correctly finds direction as northbound', () => {
   let stations =
   [
      {northbound: "rhs", southbound: "rhs", number: 2},
      {northbound: "lhs", southbound: "lhs", number: 23}
   ]
   expect(directionChecker(stations)).toEqual("southbound")
})

test('correctly finds direction as southbound', () => {
   let stations =
   [
      {northbound: "rhs", southbound: "rhs", number: 25},
      {northbound: "lhs", southbound: "lhs", number: 16}
   ]
   expect(directionChecker(stations)).toEqual("northbound")
})
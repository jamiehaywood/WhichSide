import { validate } from '../../logic/validation.js'

test('validate returns false with null inputs', () => {
    let originStation = null
    let destinationStation = null
    let inputLine = null
    expect(validate(originStation, destinationStation, inputLine)).toBeFalsy();
})

test('validate returns false with empty inputs', () => {
    let originStation = ""
    let destinationStation = ""
    let inputLine = ""
    expect(validate(originStation, destinationStation, inputLine)).toBeFalsy();
})

test('validate returns true with valid inputs', () => {
    let originStation = "Kenton"
    let destinationStation = "Waterloo"
    let inputLine = "Bakerloo"
    expect(validate(originStation, destinationStation, inputLine)).toBeTruthy();
})
import { isNotEmptyOrNullCheck } from '../../logic/validation.js'

test('null input returns false', () => {
    let originStation = null
    let destinationStation = null
    let inputLine = null
    expect(isNotEmptyOrNullCheck(originStation, destinationStation, inputLine)).toBeFalsy();
})

test('empty string returns false', () => {
    let originStation = ""
    let destinationStation = ""
    let inputLine = ""
    expect(isNotEmptyOrNullCheck(originStation, destinationStation, inputLine)).toBeFalsy();
})
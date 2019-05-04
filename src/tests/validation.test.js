import { validate } from "../logic/validation";
window.alert = jest.fn();

test('null input returns false', () => {
    let originStation = null
    let destinationStation = null
    let inputLine = null
    expect(validate(originStation, destinationStation, inputLine)).toBeFalsy();
    window.alert.mockClear();
})

test('empty string returns false', () => {
    let originStation = ""
    let destinationStation = ""
    let inputLine = ""
    expect(validate(originStation, destinationStation, inputLine)).toBeFalsy();
    window.alert.mockClear();
})

test('legit input returns true', () => {
    let originStation = "Kenton"
    let destinationStation = "Waterloo"
    let inputLine = "Bakerloo"
    expect(validate(originStation, destinationStation, inputLine)).toBeTruthy();
})


test('no legit input returns false' , () => {
    let originStation = "Early C"
    let destinationStation = "Hammy"
    let inputLine = "Piccy"
    expect(validate(originStation, destinationStation, inputLine)).toBeFalsy();
})
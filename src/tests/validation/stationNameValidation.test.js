import { stationNameCheck } from "../../logic/validation";

test('Finds stations in data object', () => {
    const originStation = "Kenton"
    const destinationStation = "Waterloo"
    const inputLine = "Bakerloo"
    const data = [{
        "lineName": "Bakerloo",
        "stationName": "Kenton",
        "northbound": "lhs",
        "southbound": "lhs",
        "number": 1
    },
    {
        "lineName": "Bakerloo",
        "stationName": "Waterloo",
        "northbound": "lhs",
        "southbound": "lhs",
        "number": 1
    }
]
    expect(stationNameCheck(data, originStation, destinationStation, inputLine)).toBeTruthy();
})

test('Does not find stations in data object', () => {
    const originStation = "Early C"
    const destinationStation = "Hammy"
    const inputLine = "Piccy"
    const data = [{
        "lineName": "Central",
        "stationName": "Newbury Park",
        "eastbound": "rhs",
        "westbound": "rhs",
        "number": 43
    },
    {
        "lineName": "Central",
        "stationName": "Barkingside",
        "eastbound": "rhs",
        "westbound": "rhs",
        "number": 44
    }
]
    expect(stationNameCheck(data, originStation, destinationStation, inputLine)).toBeFalsy();
})
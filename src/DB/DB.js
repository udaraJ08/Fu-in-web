export const EMPLOYEE_MOCK_DB = [
    {
        name: 'udara j',
        gender: 'male',
        telNo: '078 320 81 11',
        address: '123/12, temple rd, kelaniya',
        dob: '2000.01.09'
    }
]

export const FUEL_REQUESTS_DB = [
    {
        request_date: '2000.01.09',
        station: 'colombo',
        customer: 'Walakulu Gathsara',
        status: 'pending'
    }
]

export const STATION_DB = [
    {
        station_id: {
            name: 'Ganthera',
            location: 'Colombo'
        },
        fuel_id: {
            fuel_type: 'petrol',
            price: 120
        },
        amount: 5000
    }
]

export const DELIVERY_DB = [
    {
        station: 'Ganthera',
        fuel_type: 'petrol',
        amount: 1000,
        date: '2023-01-04'
    },
    {
        station: 'Rawathawaththa',
        fuel_type: 'Diesel',
        amount: 6000,
        date: '2023-01-05'
    }
]

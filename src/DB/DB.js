export const CUSTOMER_MOCK_DB = [
    {
        name: 'udara j',
        email: 'udarah07@gmail.com',
        gender: 'male',
        telephone_number: '0783208111',
        address: '123/12, temple rd, kelaniya',
        dob: '2000.01.09'
    },
    {
        name: 'Walakulu Gathsara Kumara',
        email: 'gathsarah@gmail.com',
        gender: 'male',
        telephone_number: '0721223454',
        address: 'rathanapura',
        dob: '2000.01.09'
    },
    {
        name: 'Shashini Prabodha',
        email: 'prabodha@gmail.com',
        gender: 'female',
        telephone_number: '079121223',
        address: 'Mathara',
        dob: '1997.01.24'
    },
    {
        name: 'Shamal iroshan',
        email: 'iroshan@gmail.com',
        gender: 'male',
        telephone_number: '071212124',
        address: 'Horana',
        dob: '2000.12.02'
    },
    {
        name: 'Mindula dilthushan',
        email: 'dilthushan@gmail.com',
        gender: 'male',
        telephone_number: '0772134129',
        address: 'Mathara',
        dob: '2000.04.12'
    }
]

export const EMPLOYEE_MOCK_DB = [
    {
        name: 'Thilak Gunawardhana',
        gender: 'male',
        telephone_number: '0783208111',
        email: 'thilak@gmail.com',
        address: '123/12, temple rd, kelaniya',
        dob: '2000.01.09',
        role: 'employe'
    }
]

export const FUEL_REQUESTS_DB = [
    {

        request_date: '2000.01.09',
        station: 'Ganthera',
        customer: 'Walakulu Gathsara',
        status: 'pending'
    },
    {

        request_date: '2000.01.10',
        station: 'Majestic',
        customer: 'Udara janith',
        status: 'pending'
    },
    {

        request_date: '2000.01.15',
        station: 'Kelaniya',
        customer: 'Shashini prabodha',
        status: 'accept'
    },
    {

        request_date: '2000.01.12',
        station: 'SLS',
        customer: 'Shamal Iroshan',
        status: 'pending'
    },
    {

        request_date: '2000.01.09',
        station: 'Ganthera',
        customer: 'Mindula Dilthushan',
        status: 'accept'
    },
    {

        request_date: '2000.01.09',
        station: 'SLS',
        customer: 'Lochana Thiwanka',
        status: 'pending'
    }
]

export const STATION_DB = [
    {
        station_id: {
            name: 'Ganthera',
            location: 'Colombo'
        },
        petrol: {
            price: 120,
            amount: 12000
        },
        diesel: {
            price: 120,
            amount: 5000
        }
    },
    {
        station_id: {
            name: 'SLS',
            location: 'Horana'
        },
        petrol: {
            price: 120,
            amount: 7000
        },
        diesel: {
            price: 120,
            amount: 3500
        }
    },
    {
        station_id: {
            name: 'Majestic station',
            location: 'Colombo'
        },
        petrol: {
            price: 120,
            amount: 11500
        },
        diesel: {
            price: 120,
            amount: 6000
        }
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

export const INCOME_CHART = [
    {
        name: 'january',
        total: 100000
    },
    {
        name: 'february',
        total: 160000
    },
    {
        name: 'march',
        total: 240000
    },
    {
        name: 'april',
        total: 400000
    },
    {
        name: 'may',
        total: 700000
    },
    {
        name: 'june',
        total: 900000
    }
]

export const VEHICLES_DB = [
    {
        chassis_number: '12355',
        register_number: 'BSG123',
        type: {
            vehicle_type: 'bike'
        },
         customer: {
            name: 'Udara Janith'
        }
    },
    {
        chassis_number: '12355',
        register_number: 'BSG123',
        type: {
            vehicle_type: 'van'
        },
         customer: {
            name: 'Lochana Thiwanka'
        }
    },
    {
        chassis_number: '12355',
        register_number: 'BSG123',
        type: {
            vehicle_type: 'three wheel'
        },
        customer: {
            name: 'Gathsara Kumara'
        }
    }
]

export const VEHICLE_TYPE = [
    {
        type: "car/van",
        quota: 20
    },
    {
        type: "bike",
        quota: 4
    },
    {
        type: "three wheel",
        quota: 10
    }
]

import { test, expect } from '@playwright/test';

test.describe('Booking page test', ()=>{

    test('GET bookingid`s from booker', async({request})=>{

        const response = await request.get('https://restful-booker.herokuapp.com/booking');

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        
        const data = await response.json();
        expect(Array.isArray(data)).toBeTruthy();
        expect(data.length).toBeGreaterThan(0);

        for(let elem of data){
            expect(elem).toHaveProperty('bookingid');
        }

    });

    test('Get names from bookers', async({request})=>{

        const response = await request.get('https://restful-booker.herokuapp.com/booking/1', {

            headers: {
                Accept: 'application/json',
            }
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);

        const data = await response.json();
        
        expect(data).toHaveProperty('firstname');
        expect(data).toHaveProperty('lastname');
        expect(data).toHaveProperty('totalprice');
        expect(data).toHaveProperty('depositpaid');
        expect(data).toHaveProperty('bookingdates');
        expect(data).toHaveProperty('additionalneeds');

    });

    test('POST creating booking', async({request})=>{

        const newBooking = {
                    "firstname" : "Jim",
                    "lastname" : "Brown",
                    "totalprice" : 111,
                    "depositpaid" : true,
                    "bookingdates" : {
                    "checkin" : "2018-01-01",
                    "checkout" : "2019-01-01"
                    },
                    "additionalneeds" : "Breakfast"
            } 

        const response = await request.post('https://restful-booker.herokuapp.com/booking', {
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },

            data: newBooking
            
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200)

        const data = await response.json();
        console.log(data);

        expect(data).toHaveProperty('bookingid');
        expect(data).toHaveProperty('booking');
        
        expect(data.booking).toHaveProperty('firstname');
        expect(data.booking).toHaveProperty('lastname');
        expect(data.booking).toHaveProperty('totalprice');
        expect(data.booking).toHaveProperty('depositpaid');
        expect(data.booking).toHaveProperty('bookingdates');
        expect(data.booking.bookingdates).toHaveProperty('checkin');
        expect(data.booking.bookingdates).toHaveProperty('checkout');
        expect(data.booking).toHaveProperty('additionalneeds');

    });

    test('PUT update booking data', async({request})=>{

        const authdata = {
            "username" : "admin",
            "password" : "password123"
        }

        const responseAuth = await request.post('https://restful-booker.herokuapp.com/auth', {
            headers: {
                "Content-Type": 'application/json',
                "Cookie": 'token=abc123'
            },

            data: authdata         
        });

        const {token} = await responseAuth.json();        


        const updateBooking = {
                    "firstname" : "James",
                    "lastname" : "Brown",
                    "totalprice" : 111,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2018-01-01",
                        "checkout" : "2019-01-01"
                    },
                    "additionalneeds" : "Breakfast"
            }         

        const response = await request.put('https://restful-booker.herokuapp.com/booking/1', {
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                "Cookie": `token=${token}`
            },

            data: updateBooking           
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200)

        const data = await response.json();
        console.log(data);
       
        expect(data).toHaveProperty('firstname', 'James');
        expect(data).toHaveProperty('lastname', 'Brown');
        expect(data).toHaveProperty('totalprice');
        expect(data).toHaveProperty('depositpaid');
        expect(data).toHaveProperty('bookingdates');
        expect(data.bookingdates).toHaveProperty('checkin');
        expect(data.bookingdates).toHaveProperty('checkout');
        expect(data).toHaveProperty('additionalneeds');        
        

    });

    test('PATCH update booking data partly', async({request})=>{

        const authdata = {
            "username" : "admin",
            "password" : "password123"           
        }

        const responseAuth = await request.post('https://restful-booker.herokuapp.com/auth', {
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                "Cookie": 'token=abc123'
            },

            data: authdata         
        });

        const {token} = await responseAuth.json();

        const updateBooking = {
                    "firstname" : "James",
                    "lastname" : "Brown",
                }
                
        const response = await request.patch('https://restful-booker.herokuapp.com/booking/1', {
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                "Cookie": `token=${token}`,
                "Authorization": `Bearer ${token}`
            },

            data: updateBooking           
        }); 
       
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200)

        const data = await response.json();
        console.log(data);
       
        expect(data).toHaveProperty('firstname', 'James');
        expect(data).toHaveProperty('lastname', 'Brown');        

    });

    test('DELETE booking data', async({request})=>{

        const authdata = {
            "username" : "admin",
            "password" : "password123"           
        }

        const responseAuth = await request.post('https://restful-booker.herokuapp.com/auth', {
            headers: {
                "Content-Type": 'application/json',
                "Accept": 'application/json',
                "Cookie": 'token=abc123'
            },

            data: authdata         
        });

        const {token} = await responseAuth.json();

        const createRes = await request.post('https://restful-booker.herokuapp.com/booking',{
            
            headers: { "Content-Type": "application/json" },
            data: {
            firstname: "Test",
            lastname: "User",
            totalprice: 100,
            depositpaid: true,
            bookingdates: {
            checkin: "2024-01-01",
            checkout: "2024-01-05"
            },
            additionalneeds: "Breakfast"
            }   
        });

        const createData = await createRes.json();
        const bookingId = createData.bookingid;
                
        const response = await request.delete(`https://restful-booker.herokuapp.com/booking/${bookingId}`, {
            headers: {

                "Content-Type": 'application/json',
                "Cookie": `token=${token}`,
            },
           
        }); 
       
        //expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(201)

        const data = await response.text();
        expect(data).toBe('Created');  

    });
    
    test('GET Ping check', async({request})=>{

        const response = await request.get('https://restful-booker.herokuapp.com/ping');

        expect(response.ok()).toBe(true);
        expect(response.status()).toBe(201);

        const res = await response.text();
        expect(res).toBe('Created');

    });

});
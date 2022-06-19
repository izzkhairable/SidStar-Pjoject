//user.js
jest.mock('node-fetch');
const fetch= require('node-fetch');
const {Response} = jest.requireActual('node-fetch');
// const {Error} = jest.requireActual('node-fetch');
const server = require('../app');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('SidsStars for An Airport', () => {
    it('GET /airports/sids should get all airports', async () => {
        fetch.mockReturnValue(Promise.resolve(new Response( JSON.stringify(
                    [
                        {"uid":"WSSS","name":"WSSS","icao":"WSSS","lat":1.3591666666666666,"lng":103.99111111111111,"alt":22,"iata":null}
                    ])
                )
            )
        )
        const res = await requestWithSupertest.get('/airports/sids?icao=WSSS');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual([
            {"uid":"WSSS","name":"WSSS","icao":"WSSS","lat":1.3591666666666666,"lng":103.99111111111111,"alt":22,"iata":null}
        ])
    });

    it('GET /airports/sids should get all airports', async () => {
        fetch.mockReturnValue(Promise.resolve(new Response( JSON.stringify(
                    [
                        {"uid":"WSSS","name":"WSSS","icao":"WSSS","lat":1.3591666666666666,"lng":103.99111111111111,"alt":22,"iata":null}
                    ])
                )
            )
        )
        const res = await requestWithSupertest.get('/airports/stars?icao=WSSS');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual([
            {"uid":"WSSS","name":"WSSS","icao":"WSSS","lat":1.3591666666666666,"lng":103.99111111111111,"alt":22,"iata":null}
        ])
    });
});
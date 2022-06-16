//user.js

const server = require('../app');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('User Endpoints', () => {

    it('GET /airports should get all airports', async () => {
        const res = await requestWithSupertest.get('/airports');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toHaveProperty('allAirports')
    });
});
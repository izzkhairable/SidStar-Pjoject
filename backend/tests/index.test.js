//index.js

const server = require('../app');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Root Endpoint', () => {

    it('GET should not display anything but status 200', async () => {
        const res = await requestWithSupertest.get('/');
        expect(res.status).toEqual(200);
    });
});
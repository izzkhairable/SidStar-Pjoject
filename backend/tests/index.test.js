//index.js

const server = require('../app');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Root Endpoint', () => {

    it('GET / should show all users', async () => {
        const res = await requestWithSupertest.get('/');
        expect(res.status).toEqual(400);
    });
});
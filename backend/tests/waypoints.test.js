//user.js
jest.mock('node-fetch');
const fetch= require('node-fetch');
const {Response} = jest.requireActual('node-fetch');
// const {Error} = jest.requireActual('node-fetch');
const server = require('../app');
const supertest = require('supertest');
const requestWithSupertest = supertest(server);


describe('Top waypoints', () => {
    it('GET /airports/sids/waypoints should the top sid/star waypoint for an airport', async () => {
        fetch.mockReturnValue(Promise.resolve(new Response( JSON.stringify(
                    [
                        {
                            "name": "TOMAN2E",
                            "airport": {
                                "uid": "WSSS",
                                "name": "WSSS",
                                "lat": 1.3591666666666666,
                                "lng": 103.99111111111111
                            },
                            "waypoints": [
                                {
                                    "uid": "TOPOM",
                                    "name": "TOPOM",
                                    "lat": 1.4986111111111111,
                                    "lng": 104.04083333333334
                                },
                                {
                                    "uid": "DOKTA",
                                    "name": "DOKTA",
                                    "lat": 1.435,
                                    "lng": 104.17777777777778
                                },
                                {
                                    "uid": "HOSBA",
                                    "name": "HOSBA",
                                    "lat": 1.33,
                                    "lng": 104.405
                                },
                            ]
                        },
                        {
                            "name": "TOMAN4F",
                            "airport": {
                                "uid": "WSSS",
                                "name": "WSSS",
                                "lat": 1.3591666666666666,
                                "lng": 103.99111111111111
                            },
                            "waypoints": [
                                {
                                    "uid": "LEDOX",
                                    "name": "LEDOX",
                                    "lat": 1.2783333333333333,
                                    "lng": 103.9475
                                },
                                {
                                    "uid": "HOSBA",
                                    "name": "HOSBA",
                                    "lat": 1.33,
                                    "lng": 104.405
                                },
                                {
                                    "uid": "HOSBA",
                                    "name": "HOSBA",
                                    "lat": 1.33,
                                    "lng": 104.405
                                },
                            ]
                        },
                    ])
                )
            )
        )
        const res = await requestWithSupertest.get('/airports/sids/waypoints?icao=WSSS');
        expect(res.status).toEqual(200);
        expect(res.type).toEqual(expect.stringContaining('json'));
        expect(res.body).toEqual([
            {
              "numberOfOccurrences": 3,
             "waypoint": "HOSBA",
               },
                 {
                "numberOfOccurrences": 1,
                "waypoint": "TOPOM",
              },
                {
                "numberOfOccurrences": 1,
               "waypoint": "DOKTA",
              },
                {
              "numberOfOccurrences": 1,
                "waypoint": "LEDOX",
                }
        ])
    });
});
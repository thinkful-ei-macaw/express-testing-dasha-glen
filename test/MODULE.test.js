const app = require('../app');
const chai = require('chai');
const supertest = require('supertest');
const expect = chai.expect;


describe('Sort Test', () => {
    describe('GET /apps endpoint', () => {
        it('should return 200 with JSON array of sorted apps', () => {
            const query = {
                sort: 'App',
                genre: 'Action'
            }
            return supertest(app)
                .get('/apps')
                .query(query)
                .expect(200)
                .expect('Content-Type', /json/)
                .then(res => {
                    expect(res.body).to.be.an('array');
                    expect(res.body[0]).to.be.an('object');
                })
        });
        it('Should return a status of 400 if no sort is included', () => {
            return supertest(app)
                .get('/apps')
                .expect(400, 'You need to select sort!')
        })
    })

});
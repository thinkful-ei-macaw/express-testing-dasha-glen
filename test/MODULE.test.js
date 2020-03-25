const app = require('../app');
const { expect } = require('chai');
const supertest = require('supertest');

// describe('Sort test', ()=> {
//     it('should sort by rating alphabetically', ()=>{
//         const a =  
//         const b =
//         const expectedAnswer =
//     })
// })

describe('App module', () =>{
    describe('GET /app endpoint', ()=>{
        it('should return 200 with JSON array of apps', ()=>{
            return supertest(app).get('/app').expect(200).expect('Content-Type', /json/)
            .then(res =>{
                expect(res.body).to.be.an('array');
                expect(res.body).to.have.lengthOf(20);
                expect(res.body[0]).to.be.an('object');
                expect(res.body[0]).to.include.keys('')
            })
        })
    })
});
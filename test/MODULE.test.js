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

describe('Sort test', () =>{
    describe('GET /app endpoint', ()=>{
        it('should return 200 with JSON array of apps', ()=>{
            const query ={
                sort: 'App',
                genre: 'Action'
            }
            return supertest(app).get('/apps').query(query).expect(200).expect('Content-Type', /json/)
            .then(res =>{
                expect(res.body).to.be.an('array');
                // expect(res.body).to.have.lengthOf(20);
                expect(res.body[0]).to.be.an('object');
                // expect(res.body[0]).to.include.keys('')
            })
        });
        it('Should return a status of 400 if no sort is included', () => {
            return supertest(app)
                .get('/apps')
                .expect(400, 'You need to select sort!')
        })
    })

});
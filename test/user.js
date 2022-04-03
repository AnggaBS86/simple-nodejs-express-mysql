process.env.NODE_ENV = "test"

const User = require('../db/models').User;
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');

const should = chai.should();

chai.use(chaiHttp)


describe('/POST user', () => {
    it('it sould post the user info', (done) => {
        const user = {
            firstName: "Test first name",
            lastName: "Last name",
            birthdayDate: "2000-11-11",
            location: "Somewhere"
        };

        chai.request(app)
        .post('/api/v1/users')
        .send(user)
        .end((err, res) => {
            res.should.have.status(201);
            res.body.should.be.a('object');
            res.body.should.have.property('data');
            res.body.should.have.property('message');
            res.body.should.have.property('statusType').eq('success');
            done();
        });
    });
});
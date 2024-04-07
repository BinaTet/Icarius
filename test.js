// test.js
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('./server'); // Import your Express app from server.js
const expect = chai.expect;

chai.use(chaiHttp);

describe('Joining Process', () => {
    it('should return an error if username or email is missing', (done) => {
        chai.request(app)
            .post('/join')
            .send({}) // Sending empty object to simulate missing username and email
            .end((err, res) => {
                expect(res).to.have.status(400);
                expect(res.body).to.have.property('error').that.includes('Username and email are required');
                done();
            });
    });

    it('should return success message if username and email are provided', (done) => {
        chai.request(app)
            .post('/join')
            .send({ username: 'john_doe', email: 'john_doe@example.com' })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message').that.equals('Join process successful');
                done();
            });
    });
});

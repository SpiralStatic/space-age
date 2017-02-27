var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);

describe('API User', () => {
    // Test the /GET route
    describe('/GET', () => {
        it('It should GET the list of user favorites', (done) => {
            chai.request(app)
                .get('/api/user')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.json;
                    done();
                });
        });
    });
});

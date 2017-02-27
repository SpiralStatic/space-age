var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var should = chai.should();
var expect = require('chai').expect;

var User = require('../models/user');

chai.use(chaiHttp);

describe('API User', () => {
    beforeEach((done) => {
        User.create({
            email: "test@test.com",
            password: "password"
        }, (err) => {
            if (err) return handleError(err);
            done();
        });
    });

    afterEach((done) => {
        User.remove({}, (err) => {
            if (err) return handleError(err);
            done();
       }).sort({ _id: -1 }).limit(1);
    });

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

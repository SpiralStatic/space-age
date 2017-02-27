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
            uid: "ds83hd8u3idsa8yd3dasdd83di2e89dj38",
            favorites: {
                name: "Test Launch",
                locations: [{
                    name: "Test Location",
                    latitude: "3.43438",
                    longitude: "9.23123",
                    agencies: {
                        name: "NASA"
                    }
                }],
                rockets: [{
                    name: "Atlas 8"
                }],
                status: 3,
                windowstart: "October 8, 2012 00:35:07 UTC",
                windowend: "October 8, 2012 01:35:07 UTC"
            }
        }, (err) => {
            if (err) return err;
            done();
        });
    });

    afterEach((done) => {
        User.remove({}, (err) => {
            if (err) return err;
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

var chai = require('chai');
var chaiHttp = require('chai-http');
var app = require('../index');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);

describe('Serve', () => {
    // Test the /GET route
    describe('/GET', () => {
        it('It should GET the single web page', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.should.be.html;
                    res.text.should.match(/Space Age/);
                    done();
                });
        });
    });
});

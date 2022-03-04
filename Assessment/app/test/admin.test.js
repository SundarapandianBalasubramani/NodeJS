var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../src/app");
let should = chai.should();
chai.use(chaiHttp);

chai.should();
chai.use(require("chai-http"));

describe("Admin Login", function () {
  it("Admin sign-in success", (done) => {
    chai
      .request(server)
      .post("/login")
      .send({
        email: "Sundarapandian.balasubramani@outlook.com",
        pwd: "WelcomeMongoDB2022",
      })
      .end(function (err, res) {
        res.status.should.equal(200);
        res.type.should.equal("application/json");
        done();
      });
  });
});

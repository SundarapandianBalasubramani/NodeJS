var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../src/app");
let should = chai.should();
chai.use(chaiHttp);

chai.should();
chai.use(require("chai-http"));

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IlN1bmRhcmFwYW5kaWFuLkJhbGFzdWJyYW1hbmlAb3V0bG9vay5jb20iLCJpZCI6MSwiYWRtaW4iOnRydWUsInJvbGUiOnsicHJvZHVjdHMiOjEsIm9mZmVycyI6MX0sIm5hbWUiOiJTdW5kYXIiLCJpYXQiOjE2NDYzMzExMzB9.OTcVVt0ctH3TdoEFAODEMcGueWu-xnNRA3XamJUJNdc";

const productId = 1012;

describe("Products", function () {
  it("Get all the products", (done) => {
    chai
      .request(server)
      .get("/products")
      .end((err, result) => {
        result.should.have.status(200);
        console.log(`${result.body.length} products retrieved`);
        done();
      });
  });

  it("Get one product", (done) => {
    chai
      .request(server)
      .get("/products/1")
      .end((err, result) => {
        result.should.have.status(200);
        result.body._id.should.eq(1);
        console.log(`Product retrived with id ${result.body._id}`);
        done();
      });
  });

  it("Add one product", (done) => {
    chai
      .request(server)
      .post("/products")
      .set("Authorization", "Bearer " + token)
      .send({
        _id: productId,
        name: "Products Add Test ",
        description: "Lorem ipsum Lorem ipsum",
        sortOrder: productId,
        img: "products.png",
        price: 30,
        category: [],
        available: true,
      })
      .end((err, result) => {
        result.should.have.status(201);
        result.body.insertedId.should.eq(productId);
        console.log(`Product added with id ${result.body.insertedId}`);
        done();
      });
  });

  it("Update one product", (done) => {
    chai
      .request(server)
      .patch(`/products/${productId}`)
      .set("Authorization", "Bearer " + token)
      .send({
        name: "Products Add Test Update",
      })
      .end((err, result) => {
        result.should.have.status(200);
        console.log(`Product updated count  ${result.body.modifiedCount}`);
        done();
      });
  });

  it("Delete one product", (done) => {
    chai
      .request(server)
      .delete(`/products/${productId}`)
      .set("Authorization", "Bearer " + token)
      .end((err, result) => {
        result.should.have.status(200);
        console.log(`Product deleted count  ${result.body.deletedCount}`);
        done();
      });
  });
});

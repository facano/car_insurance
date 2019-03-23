const expect = require('chai').expect;

const carInsuranceModule = require('../src/CarInsurance');
const productModule = require('../src/Product');
const CarInsurance = carInsuranceModule.CarInsurance;
const Product = productModule.Product;

describe("CarInsurance", function() {

  it("should create CarInsurance instance", function() {
    const product = new Product("name", 0, 0);
    const carInsurance = new CarInsurance([product]);

    expect(carInsurance.products[0].name).equal(product.pName);
    expect(carInsurance.products[0].pSellIn).equal(product.pSellIn);
    expect(carInsurance.products[0].pPrice).equal(product.pPrice);
  });

});
const expect = require('chai').expect;

const carInsuranceModule = require('../src/CarInsurance');
const productModule = require('../src/Product');
const CarInsurance = carInsuranceModule.CarInsurance;
const Product = productModule.Product;

describe("CarInsurance", function() {

  it("should create CarInsurance instance", function() {
    const product = new Product("name", 0, 0);
    const carInsurance = new CarInsurance([product]);

    expect(carInsurance.products[0].name).to.equal(product.name);
    expect(carInsurance.products[0].sellIn).to.equal(product.sellIn);
    expect(carInsurance.products[0].price).to.equal(product.price);
  });

  it("should decrement price in one unit, for normal products", function(){
    const product = new Product("foo", 10, 10);
    const carInsurance = new CarInsurance([product]);
    const products = carInsurance.updatePrice();

    expect(carInsurance.products[0].price).to.equal(9);
  });

  it("should stop decrement price in one unit when reach 0, for normal products", function(){
    const product = new Product("foo", 10, 0);
    const carInsurance = new CarInsurance([product]);
    const products = carInsurance.updatePrice();

    expect(carInsurance.products[0].price).to.equal(0);
  });

});
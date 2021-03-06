const expect = require('chai').expect;

const carInsuranceModule = require('../src/CarInsurance');
const productModule = require('../src/Product');
const priceRuleModule = require('../src/PriceRule');
const CarInsurance = carInsuranceModule.CarInsurance;
const Product = productModule.Product;
const PriceRule = priceRuleModule.PriceRule;

describe("CarInsurance", function() {

  it("should create CarInsurance instance", function() {
    const product = new Product("foo", 1, 1);
    const carInsurance = new CarInsurance([product]);

    expect(carInsurance.products[0].name).to.equal(product.name);
    expect(carInsurance.products[0].sellIn).to.equal(product.sellIn);
    expect(carInsurance.products[0].price).to.equal(product.price);
  });

  it("should update price of products in one iteration", function(){
    const product = new Product("foo", 10, 10);
    const productCloned = new Product("foo", 10, 10);
    const carInsurance = new CarInsurance([product]);
    carInsurance.updatePrice();
    let price = PriceRule.getPrice(productCloned);

    expect(carInsurance.products[0].price).to.equal(price);
  });

    it("should decrement sellIn of products in one iteration", function(){
    const product = new Product("foo", 10, 10);
    const carInsurance = new CarInsurance([product]);
    carInsurance.updatePrice();

    expect(carInsurance.products[0].sellIn).to.equal(9);
  });

  it("should get a unchanged sellIn from of iteration, for Mega Coverage", function(){
    const product = new Product("Mega Coverage", 10, 10);
    const carInsurance = new CarInsurance([product]);
    let price = PriceRule.getPrice(product);
    carInsurance.updatePrice();

    expect(carInsurance.products[0].sellIn).to.equal(10);
  });

});
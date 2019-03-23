const expect = require('chai').expect;

const productModule = require('../src/Product');
const priceRuleModule = require('../src/PriceRule');
const Product = productModule.Product;
const PriceRule = priceRuleModule.PriceRule;
PriceRule.loadRules('spec/data/rules.json');

describe("PriceRule", function() {

  it("should get a price change giving a product instance", function() {
    let pName = "foo",
        pSellIn = 1,
        pPrice = 1;
    const product = new Product(pName, pSellIn, pPrice);
    let price = PriceRule.getPrice(product);

    expect(price).to.be.a('number');
  });

  it("should decrement price in one unit, for sellIn > 1 in normal products", function(){
    const product = new Product("foo", 10, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(product.price - 1);
  });

  it("should decrement price in two units, for sellIn < 1 in normal products", function(){
    const product = new Product("foo", -1, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(product.price - 2);
  });

  it("should decrement price default units, if rule not found for sellIn > 1 in normal products", function(){
    const product = new Product("dummy", 10, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(product.price - 1);
  });

  it("should decrement price default units, if rule not found for sellIn < 1 in normal products", function(){
    const product = new Product("dummy", 0, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(product.price - 2);
  });

  it("should get price with min value 0, for normal products", function(){
    const product = new Product("foo", 10, 0);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(0);
  });

  it("should get price with max value 50, for normal products", function(){
    const product = new Product("foo", 10, 52);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(50);
  });

  it("should get price with max value 50, for normal products", function(){
    const product = new Product("foo", 10, 52);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(50);
  });

  it("should get a increaseing price, for Full Coverage", function(){
    const product = new Product("Full Coverage", 10, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(product.price + 1);
  });

  it("should get a unchanged price of 80, for Mega Coverage", function(){
    const product = new Product("Mega Coverage", 10, 80);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(80);
  });

  it("should get a increaseing price of 3 unit, for sellIn in 1..5 in Special Full Coverage", function(){
    const product = new Product("Special Full Coverage", 5, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(product.price + 3);
  });

  it("should get a increaseing price of 2 unit, for sellIn in 6..10 in Special Full Coverage", function(){
    const product = new Product("Special Full Coverage", 10, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(product.price + 2);
  });

  it("should get a increaseing price of default unit, for sellIn in >10 in Special Full Coverage", function(){
    const product = new Product("Special Full Coverage", 11, 15);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(product.price + 1);
  });

  it("should get a price 0, for sellIn = in 0 Special Full Coverage", function(){
    const product = new Product("Special Full Coverage", 0, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(0);
  });

  it("should get a price 0, for sellIn < 0 Special Full Coverage", function(){
    const product = new Product("Special Full Coverage", -1, 0);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(0);
  });

  it("should decrement price in doble default units, for sellIn > 1 in Super Sale", function(){
    const product = new Product("Super Sale", 10, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(product.price - 2);
  });

  it("should decrement price in doble default units, for sellIn < 1 in Super Sale", function(){
    const product = new Product("Super Sale", -1, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(product.price - 4);
  });


});

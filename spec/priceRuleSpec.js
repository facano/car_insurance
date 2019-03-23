const expect = require('chai').expect;

const productModule = require('../src/Product');
const priceRuleModule = require('../src/PriceRule');
const Product = productModule.Product;
const PriceRule = priceRuleModule.PriceRule;

describe("PriceRule", function() {

  it("should get a price update giving a product instance", function() {
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

    expect(price).to.equal(9);
  });

  it("should decrement price in two units, for sellIn < 1 in normal products", function(){
    const product = new Product("foo", -1, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(8);
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




});

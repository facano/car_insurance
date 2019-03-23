const expect = require('chai').expect;

const productModule = require('../src/Product');
const priceRuleModule = require('../src/PriceRule');
const Product = productModule.Product;
const PriceRule = priceRuleModule.PriceRule;

describe("PriceRule", function() {

  it("should get a price for a Product instance", function() {
    let pName = "foo",
        pSellIn = 0,
        pPrice = 0;
    const product = new Product(pName, pSellIn, pPrice);
    let price = PriceRule.getPrice(product);

    expect(price).to.be.a('number');
  });

  it("should decrement price in one unit, for normal products", function(){
    const product = new Product("foo", 10, 10);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(9);
  });

  it("should stop decrement price in one unit when reach 0, for normal products", function(){
    const product = new Product("foo", 10, 0);
    let price = PriceRule.getPrice(product);

    expect(price).to.equal(0);
  });


});

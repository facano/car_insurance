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

});

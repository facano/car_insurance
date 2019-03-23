const expect = require('chai').expect;

const productModule = require('../src/Product');
const Product = productModule.Product;

describe("Product", function() {

  it("should create Product instance", function() {
    let pName = "name",
        pSellIn = 0,
        pPrice = 0;
    const product = new Product(pName, pSellIn, pPrice);

    expect(product.name).equal(pName);
    expect(product.pSellIn).equal(pSellIn);
    expect(product.pPrice).equal(pPrice);
  });

});

const priceRuleModule = require('../src/PriceRule');
const PriceRule = priceRuleModule.PriceRule;

class CarInsurance {
  constructor(products) {
    this.products = products;
  }

  updatePrice(){
    this.products.forEach( function(product, index) {
      product.price = PriceRule.getPrice(product);
    });
  }
}

module.exports = {
  CarInsurance
}
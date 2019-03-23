const priceRuleModule = require('../src/PriceRule');
const PriceRule = priceRuleModule.PriceRule;

class CarInsurance {
  constructor(products) {
    this.products = products;
  }

  updatePrice(){
    this.products.forEach( function(product, index) {
      if (product.name != 'Mega Coverage')
        product.sellIn -= 1;

      product.price = PriceRule.getPrice(product);
    });
    return this.products;
  }
}

module.exports = {
  CarInsurance
}
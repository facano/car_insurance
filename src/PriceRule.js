class PriceRule {
  static getPrice(product){
    let price = product.price;
    if (price > 0){
      price -= 1;
    }
    return price;
  }
}

module.exports = {
  PriceRule
}
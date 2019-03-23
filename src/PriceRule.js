class PriceRule {
  static getPrice(product){
    let price = product.price + this.getDiff(product);
    price = this.checkEdgeCase(price);

    return price;
  }

  static checkEdgeCase(price){
    if (price < 0)
      return 0;
    if (price > 50)
      return 50;

    return price;
  }

  static getDiff(product){
    let priceValue,
        rulesProduct = this.rules.get(product.name) || this.rules.get("default");

    rulesProduct.forEach( function(rule, index) {
      if(rule.from != undefined && rule.to != undefined){
        if (rule.from <= product.sellIn && rule.to >= product.sellIn)
          priceValue = rule.value;
      }
      else if(rule.from != undefined && rule.to == undefined){
        if (rule.from <= product.sellIn)
          priceValue = rule.value;
      }
      else if(rule.from == undefined && rule.to != undefined){
        if (rule.to >= product.sellIn)
          priceValue = rule.value;
      }
      else{
        priceValue = rule.value;
      }
    });

    if (typeof priceValue == "string"){
      if (priceValue == "-price")
        return -product.price;
      else if (priceValue == "price")
        return product.price;
    }
    else {
      return priceValue;
    }
  }

  // Load an array of rules from a JSON file and parse it into a Map.
  // Each rule has the follow format:
  // {
  //    "name": "Name of the kind of Product",
  //    "rules": [
  //        "from": number (optional), describe a lower value (inclusive) for sellIn property
  //        "to": number (optional), describe a upper value (inclusive) for sellIn property
  //        "value": value for increment or decrement price. Special values are "price" and "-price"
  //                 for  increment or decrement the value of all price respectively
  //    ]
  // }
  static loadRules(){
    var fs = require('fs');
    var rulesJson = JSON.parse(fs.readFileSync('data/rules.json', 'utf8'));
    let rules = new Map();
    rulesJson.forEach( function(rule, index) {
      rules.set(rule.name, rule.rules)
    });
    this.rules = rules;
  }

}
PriceRule.loadRules();

module.exports = {
  PriceRule
}
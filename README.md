# CarInsurance
## Implementation
The implementation was made with node.js v9.8 and npm v5.6.0.
The solution consists in three main classes, `CarInsurance`,  `Product`and `PriceRule`:
- `Product` keeps the basic data of each product.
- `CarInsurance` is the main module in the flow, with the control of the iterations and the responsability of update values for each product instance.
- `PriceRule`has the responsability of get a specific price depending of the characteristics of each product. This class get the rules from the file `data/rules.json` and parse them into a Map for improve performance. The file `data/rules.json` requires an array of rules, with the following format:
```
  {
      "name": "Name of the kind of Product",
      "rules": [
          "from": number (optional) - describe a lower value (inclusive) for sellIn property
          "to": number (optional) - describe a upper value (inclusive) for sellIn property
          "value": value for increment or decrement price. Special values is "-price"
                   for decrement the value of all price
      ]
  }
```

For example, a valid file is:
```
 [
  {
    "name": "default",
    "rules": [
      {
        "from": 1,
        "value": -1
      },
      {
        "to": 0,
        "value": -2
      }
    ]
  }
]
```

## Commands:
- `npm run test`, runs the test suite and displays the coverage report. For the detail of coverage report please open `coverage/index.html`
- `npm run after-30-days`, displays an output for the current rules. Also, you can open the generated file in `products_after_30_days.txt`

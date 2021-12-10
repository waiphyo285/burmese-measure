# burmese-measure

This package can be simply used as interchangeable gram to burmese measuring unit kyat, pae, yway. It has been published as an example and is developing on more useful converting methods.

## Getting Started

To install `npm i burmese-measure` and can be `require` or `import` from your Node.JS application.

```
   // CommonJS
   const { BurmeseMeasure } = require("burmese-measure");
   const bmObj = new BurmeseMeasure();

   console.log("All to Gram: ", bmObj.getAllToGram())
   // All to Gram: [
   //  { value: [ '$1yway_lay', 0.136077706 ], unit: 'g' },
   //  { value: [ '$1yway_gyi', 0.272155412 ], unit: 'g' },
   //  { value: [ '$1pae_thar', 1.020582833 ], unit: 'g' },
   //  ...
   // ]

   console.log("Gram to Yway Lay :", bmObj.convertG2YL(0.136077706));
   // Gram to Yway Lay : 1

   console.log("Gram to Yway Gyi :", bmObj.convertG2YG(0.272155412));
   // Gram to Yway Gyi : 1

   console.log("Gram to Pae Thar :", bmObj.convertG2Pe(1.020582833));
   // Gram to Pae Thar : 1

   console.log("Gram to Mu Thar :", bmObj.convertG2Mu(2.041165665));
   // Gram to Mu Thar : 1

   console.log("Gram to Mat Thar :", bmObj.convertG2Mt(4.08233133));
   // Gram to Mat Thar: 1

   console.log("Gram to Kyat Thar :", bmObj.convertG2K(16.32932532));
   // Gram to Kyat Thar : 1

   console.log("Gram to Pate Thar :", bmObj.convertG2P(1632.932532));
   // Gram to Pate Thar : 1

   console.log("Gram to Kyat, Pae :", bmObj.convertG2KP(128.42));
   // Gram  to Kyat, Pae: [7, 13.830060932364347]

   console.log("Gram to Kyat, Pae, Yway :", bmObj.convertG2KPY(128.42));
   // Gram to KPY : [ 7, 13, 6.640487458914777 ]

   console.log("Yway Lay to Gram :", bmObj.convertYL2G(1));
   // Yway Lay to Gram : 0.136077706

   console.log("Yway Gyi to Gram :", bmObj.convertYG2G(1));
   // Yway Gyi to Gram : 0.272155412

   console.log("Pae to Gram :", bmObj.convertYG2G(1));
   // Pae to Gram : 1.020582833

   console.log("Mu to Gram :", bmObj.convertYG2G(1));
   // Mu to Gram : 2.041165665

   console.log("Mat Thar to Gram :", bmObj.convertMt2G(1));
   // Mat Thar to Gram : 4.08233133

   console.log("Kyat Thar to Gram :", bmObj.convertK2G(1));
   // Kyat Thar to Gram : 16.32932532

   console.log("Pate Thar to Gram :", bmObj.convertP2G(1));
   // Pate Thar to Gram : 1632.932532

   console.log("Kyat, Pae to Gram :", bmObj.convertKP2G(7, 13.830060932364347));
   // Kyat, Pae, Yway to Gram : 128.42

   console.log("Kyat, Pae, Yway to Gram :", bmObj.convertKPY2G(7, 13, 6.640487458914777));
   // Kyat, Pae, Yway to Gram : 128.42

   // ES6
   import { BurmeseMeasure } from "burmese-measure";
   const bmObj = new BurmeseMeasure();

   console.log("Gram to Kyat, Pae, Yway :", bmObj.convertG2KPY(128.42));
   // Gram to Kyat, Pae, Yway : [ 7, 13, 6.640487458914777 ]

   console.log("Kyat, Pae, Yway to Gram :", bmObj.convertKPY2G(7, 13, 6.640487458914777))
   // Kyat, Pae, Yway to Gram : 128.42
```

## References

https://asian-recipe.com/burmese-measuring-system-2312

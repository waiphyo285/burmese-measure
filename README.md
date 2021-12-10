# burmese-measure

This package can be simply used as interchangeable gram to burmese measuring unit kyat, pae, yway. It has been published as an example and is developing on more useful converting methods.

## Getting Started

To install `npm i burmese-measure` and can be `require` or `import` from your Node.JS application.

```
   // CommonJS
   const { BurmeseMeasure } = require("burmese-measure");
   const bmObj = new BurmeseMeasure();

   console.log("Gram to Yway Lay :", convertG2YL(1));
   // Gram to Yway Lay : 0.136077706

   console.log("Gram to Yway Gyi :", convertG2YG(1));
   // Gram to Yway Gyi : 0.272155412

   console.log("Gram to Mat Thar :", convertG2Mt(1));
   // Gram to Mat Thar: 4.08233133

   console.log("Gram to Kyat Thar :", convertG2K(1));
   // Gram to Kyat Thar : 16.32932532

   console.log("Gram to Pate Thar :", convertG2P(1));
   // Gram to Pate Thar : 1632.932532

   console.log("Gram to Kyat, Pae, Yway :", bmObj.convertG2KPY(128.42));
   // Gram to KPY : [ 7, 13, 6.640487458914777 ]

   console.log("Yway Lay to Gram :", bmObj.convertYL2G(0.136077706));
   // Yway Lay to Gram : 1

   console.log("Yway Gyi to Gram :", bmObj.convertYG2G(0.272155412));
   // Yway Gyi to Gram : 1

   console.log("Mat Thar to Gram :", bmObj.convertMt2G(0.272155412));
   // Mat Thar to Gram : 1

   console.log("Kyat Thar to Gram :", bmObj.convertK2G(0.272155412));
   // Kyat Thar to Gram : 1

   console.log("Pate Thar to Gram :", bmObj.convertP2G(0.272155412));
   // Pate Thar to Gram : 1

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

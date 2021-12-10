# burmese-measure

This package can be simply used as interchangeable gram to burmese measuring unit kyat, pae, yway. It has been published as an example and is developing on more useful converting methods.

[![workflows-badge]][workflows]
[![travis-badge]][travis]
[![npm-badge]][npm]
![test-mocha]

## Getting Started

To install `npm i burmese-measure` and can be `require` or `import` from your Node.JS application.

```
   // CommonJS
   const { BurmeseMeasure } = require("burmese-measure");
   const bmObj = new BurmeseMeasure();
   console.log("Gram to KPY :", bmObj.convertG2KPY(130.55));
   // Gram to KPY : [ 7, 13, 6.651 ]
   console.log("KPY to Gram :", bmObj.convertKPY2G(7, 13, 6.651));
   // KPY to Gram : 130.55

   // ES6
   import { BurmeseMeasure } from "burmese-measure";
   const bmObj = new BurmeseMeasure();
   console.log("Gram to KPY :", bmObj.convertG2KPY(130.55));
   // Gram to KPY : [ 7, 13, 6.651 ]
   console.log("KPY to Gram :", bmObj.convertKPY2G(7, 13, 6.651))
   // KPY to Gram : 130.55
```

## References

https://asian-recipe.com/burmese-measuring-system-2312

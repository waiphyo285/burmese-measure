# burmese-measure

This package can be simply used as conversion gram to burmese measuring units such as kyat, pae, yway, etc. It has been published as an example and is developing on more useful converting methods.

<p>
   <a href="https://www.npmjs.com/package/burmese-measure"><img alt="npm" src="https://img.shields.io/badge/npm-v1.0.7-blue?style=flat"></a>
   <a href="https://npmcharts.com/compare/burmese-measure"><img alt="npm" src="https://img.shields.io/badge/downloads-1K/month-green?style=flat"></a>
   <a href="https://github.com/waiphyo285/burmese-measure/blob/main/LICENSE"><img alt="npm" src="https://img.shields.io/badge/license-MIT-blue?style=flat"></a>
</p>

## Getting Started

To install `npm i burmese-measure` and can be `require` or `import` from your Node.JS application.

```
   // CommonJS
   const { BurmeseMeasure } = require("burmese-measure");
   const bmObj = new BurmeseMeasure();
```

```
   console.log("All to Gram: ", bmObj.getAllToGram())
   // All to Gram: [
   //  { value: [ '$1yway_lay', 0.136077706 ], unit: 'g' },
   //  { value: [ '$1yway_gyi', 0.272155412 ], unit: 'g' },
   //  { value: [ '$1pae_thar', 1.020582833 ], unit: 'g' },
   //  ...
   // ]
```

```
console.log("Gram to Yway Lay :", bmObj.convertG2YL(0.136077706));
// Gram to Yway Lay : 1
```

```
console.log("Gram to Yway Gyi :", bmObj.convertG2YG(0.272155412));
// Gram to Yway Gyi : 1
```

```
console.log("Gram to Pae Thar :", bmObj.convertG2Pe(1.020582833));
// Gram to Pae Thar : 1
```

```
console.log("Gram to Mu Thar :", bmObj.convertG2Mu(2.041165665));
// Gram to Mu Thar : 1
```

```
console.log("Gram to Mat Thar :", bmObj.convertG2Mt(4.08233133));
// Gram to Mat Thar: 1
```

```
console.log("Gram to Kyat Thar :", bmObj.convertG2K(16.32932532));
// Gram to Kyat Thar : 1
```

```
console.log("Gram to Pate Thar :", bmObj.convertG2P(1632.932532));
// Gram to Pate Thar : 1
```

```
console.log("Gram to Kyat, Pae :", bmObj.convertG2KP(128.42));
// Gram to Kyat, Pae: [7, 13.830060932364347]
```

```
console.log("Gram to Kyat, Pae, Yway :", bmObj.convertG2KPY(128.42));
// Gram to KPY : [ 7, 13, 6.640487458914777 ]
```

```
console.log("Yway Lay to Gram :", bmObj.convertYL2G(1));
// Yway Lay to Gram : 0.136077706
```

```
console.log("Yway Gyi to Gram :", bmObj.convertYG2G(1));
// Yway Gyi to Gram : 0.272155412
```

```
console.log("Pae Thar to Gram :", bmObj.convertYG2G(1));
// Pae Thar to Gram : 1.020582833
```

```
console.log("Mu Thar to Gram :", bmObj.convertYG2G(1));
// Mu Thar to Gram : 2.041165665
```

```
console.log("Mat Thar to Gram :", bmObj.convertMt2G(1));
// Mat Thar to Gram : 4.08233133
```

```
console.log("Kyat Thar to Gram :", bmObj.convertK2G(1));
// Kyat Thar to Gram : 16.32932532
```

```
console.log("Pate Thar to Gram :", bmObj.convertP2G(1));
// Pate Thar to Gram : 1632.932532
```

```
console.log("Kyat, Pae to Gram :", bmObj.convertKP2G(7, 13.830060932364347));
// Kyat, Pae, Yway to Gram : 128.42
```

```
console.log("Kyat, Pae, Yway to Gram :", bmObj.convertKPY2G(7, 13, 6.640487458914777));
// Kyat, Pae, Yway to Gram : 128.42
```

```
// ES6
import { BurmeseMeasure } from "burmese-measure";
const bmObj = new BurmeseMeasure();
```

```
console.log("Gram to Kyat, Pae, Yway :", bmObj.convertG2KPY(128.42));
// Gram to Kyat, Pae, Yway : [ 7, 13, 6.640487458914777 ]
```

```
console.log("Kyat, Pae, Yway to Gram :", bmObj.convertKPY2G(7, 13, 6.640487458914777))
// Kyat, Pae, Yway to Gram : 128.42
```

## Contribution

Bug fixes and features are welcomed.

## References

https://asian-recipe.com/burmese-measuring-system-2312

## License

MIT License

Copyright (c) 2021 Wai Phyo Naing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

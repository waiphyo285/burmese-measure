# burmese-measure

This package can be used to convert from Burmese measuring units to metric system via vice versa.
It is made here in order for simplicity of use for various metrics including mass, length, and volume. It has been published as an example and is developing on more useful converting methods.

<p>
   <a href="https://www.npmjs.com/package/burmese-measure"><img alt="npm" src="https://img.shields.io/badge/npm-v1.0.7-blue?style=flat"></a>
   <a href="https://github.com/waiphyo285/burmese-measure/blob/main/LICENSE"><img alt="npm" src="https://img.shields.io/badge/license-MIT-blue?style=flat"></a>
</p>

## Getting Started

To install `npm i burmese-measure` and can be `require` or `import` from your Node.JS application.

```
// CommonJS
const { massConvertor } = require("burmese-measure");
```

```
// ES6
import { massConvertor } from "burmese-measure";
```

## Description

Beneath, you will find the following table exhibiting the standard value in relation to Mass, Length & Volume.

| Burmese unit        | Metric system (gram)  | Metric system (meter) | Metric system (liter) |
| ------------------- | --------------------- | --------------------- | --------------------- |
| yway_lay            | 1.36078e-1            |                       |
| yway_gyi            | 2.72155e-1            |                       |                       |
| pae_thar            | 1.02058               |                       |                       |
| mu_thar             | 2.04117               |                       |                       |
| mat_thar            | 4.08233               |                       |                       |
| kyat_thar (default) | 16.3293               |                       |                       |
| pate_thar           | 1632.93               |                       |                       |
| -------------       | --------------------- | --------------------- | --------------------- |
| sanchi              |                       | 7.9375e-5             |                       |
| hnan                |                       | 7.9375e-4             |                       |
| muyaw               |                       | 4.7625e-3             |                       |
| let_thit            |                       | 1.905e-2              |                       |
| maik                |                       | 1.524e-1              |                       |
| htwa                |                       | 2.286e-1              |                       |
| taung               |                       | 4.572e-1              |                       |
| lan (default)       |                       | 1.8288                |                       |
| ta                  |                       | 3.2004                |                       |
| out_thaba           |                       | 64.008                |                       |
| kawtha              |                       | 1280.16               |                       |
| ga_wout             |                       | 5120.64               |                       |
| yuzana              |                       | 20482.56              |                       |
| -------------       | --------------------- | --------------------- | --------------------- |
| la_myu              |                       |                       | 7.99118e-2            |
| la_myet             |                       |                       | 1.59824e-1            |
| la_me               |                       |                       | 3.19647e-1            |
| sa_le               |                       |                       | 6.39294e-1            |
| hkwet               |                       |                       | 1.27859               |
| pyi (default)       |                       |                       | 2.55718               |
| seit                |                       |                       | 10.2287               |
| hkwe                |                       |                       | 20.4574               |
| tin                 |                       |                       | 40.9148               |

## Contribution

Bug fixes and features are welcomed.

## References

- https://asian-recipe.com/burmese-measuring-system-2312
- https://en.wikipedia.org/wiki/Myanmar_units_of_measurement

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

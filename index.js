var BMeasure = function () {};

BMeasure.prototype.convertG2KPY = function (g) {
  /* 
    set standard value  
    1 Kyat = 16.6 g;
    1 Kyat = 16 Pae;
    1 Pae = 8 Yway;
  */
  const GramPerKyat = 16.6;
  if (typeof g === "number") {
    let [temp, kyat, pae, yway] = [0, 0, 0];
    temp = g / GramPerKyat;
    // check if integer
    if (temp % 1 === 0) {
      // return k,p,y
      return [(kyat = temp), pae, yway];
    } else {
      /*  ways to get integer from float
      ~~temp; temp | 0; temp >> 0; */
      kyat = ~~temp;
      temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
      pae = ~~temp;
      temp = pae > 0 ? (temp % pae) * 8 : temp * 8;
      yway = +temp.toFixed(3);
      // return k,p,y
      return [kyat, pae, yway];
    }
  } else {
    throw new Error("NAN is found.");
  }
};

BMeasure.prototype.convertKPY2G = function (k, p = 0, y = 0) {
  /* 
    set standard value  
    1 Kyat = 16.6 g;
    1 Kyat = 16 Pae;
    1 Kyat = 128 Yway;
  */
  const GramPerKyat = 16.6;
  if (typeof (k + p + y) === "number") {
    let [temp, gram] = [0, 0, 0];
    // convert pae to kyat, yway to kyat and sum of total kyat
    temp = k + (p > 0 ? p / 16 : 0) + (y > 0 ? y / 128 : 0);
    // multiply kyat with 16.6, to get total gram
    gram = +(temp * GramPerKyat).toFixed(3);
    // return gram
    return gram;
  } else {
    throw new Error("NAN is found.");
  }
};
module.exports = new BMeasure();

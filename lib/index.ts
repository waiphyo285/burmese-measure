export class BurmeseMeasure {
  public convertG2KPY(g: number): number[] {
    /*
     * @param {number} g
     * @return {number[]}
     */
    const GramPerKyat = 16.6;
    if (typeof g === "number") {
      let [temp, kyat, pae, yway] = [0, 0, 0, 0];
      temp = g / GramPerKyat;
      // check if integer
      if (temp % 1 === 0) {
        // return k,p,y
        return [(kyat = temp), pae, yway];
      } else {
        kyat = ~~temp; // get kyat value
        temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
        pae = ~~temp; // get pae value
        temp = pae > 0 ? (temp % pae) * 8 : temp * 8;
        yway = +temp.toFixed(3); // get yway value
        // return k,p,y
        return [kyat, pae, yway];
      }
    } else {
      throw new Error("NAN is found.");
    }
  }
  public convertKPY2G(k: number, p: number = 0, y: number = 0): number {
    /*
     * @param {number} k
     * @param {number} p
     * @param {number} y
     * @return {number} g
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
  }
}

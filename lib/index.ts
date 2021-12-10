const $ = {
  $gram: {
    $1yway_lay: 0.136077706,
    $1yway_gyi: 0.272155412,
    $1pae_thar: 1.020582833,
    $1mu_thar: 2.041165665,
    $1mat_thar: 4.08233133,
    $5mue_thar: 8.16466266,
    $1kyat_thar: 16.32932532,
    $awat_thar: 204.1165665,
    $aseit_thar: 408.233133,
    $50seit_thar: 816.466266,
    $1pate_thar: 1632.932532,
    $100pate_thar: 163293.2532,
    $1000pate_thar: 1632932.532,
  },
};

export class BurmeseMeasure {
  public convertYL2G(yl: number): number {
    /*
     * @param {number} yl
     * @return {number}
     */
    if (typeof yl === "number") {
      return yl / $.$gram.$1yway_lay;
    } else {
      throw new Error("NAN is found.");
    }
  }
  public convertYG2G(yg: number): number {
    /*
     * @param {number} yg
     * @return {number}
     */
    if (typeof yg === "number") {
      return yg / $.$gram.$1yway_gyi;
    } else {
      throw new Error("NAN is found.");
    }
  }
  public convertMt2G(mt: number): number {
    /*
     * @param {number} mt
     * @return {number}
     */
    if (typeof mt === "number") {
      return mt / $.$gram.$1mat_thar;
    } else {
      throw new Error("NAN is found.");
    }
  }
  public convertK2G(k: number): number {
    /*
     * @param {number} k
     * @return {number}
     */
    if (typeof k === "number") {
      return k / $.$gram.$1kyat_thar;
    } else {
      throw new Error("NAN is found.");
    }
  }
  public convertP2G(p: number): number {
    /*
     * @param {number} p
     * @return {number}
     */
    if (typeof p === "number") {
      return p / $.$gram.$1pate_thar;
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
    if (typeof (k + p + y) === "number") {
      let [temp, gram] = [0, 0];
      // convert pae to kyat, yway to kyat and sum of total kyat
      temp = k + (p > 0 ? p / 16 : 0) + (y > 0 ? y / 128 : 0);
      // multiply kyat with 16.6, to get total gram
      gram = temp * $.$gram.$1kyat_thar;
      // return gram
      return gram;
    } else {
      throw new Error("NAN is found.");
    }
  }
  public convertG2YL(g: number): number {
    /*
     * @param {number} g
     * @return number
     */
    if (typeof g === "number") {
      return g * $.$gram.$1yway_lay;
    } else {
      throw new Error("NAN is found.");
    }
  }
  public convertG2YG(g: number): number {
    /*
     * @param {number} g
     * @return number
     */
    if (typeof g === "number") {
      return g * $.$gram.$1yway_gyi;
    } else {
      throw new Error("NAN is found.");
    }
  }
  public convertG2Mt(g: number): number {
    /*
     * @param {number} g
     * @return number
     */
    if (typeof g === "number") {
      return g * $.$gram.$1mat_thar;
    } else {
      throw new Error("NAN is found.");
    }
  }
  public convertG2K(g: number): number {
    /*
     * @param {number} g
     * @return number
     */
    if (typeof g === "number") {
      return g * $.$gram.$1kyat_thar;
    } else {
      throw new Error("NAN is found.");
    }
  }
  public convertG2P(g: number): number {
    /*
     * @param {number} g
     * @return number
     */
    if (typeof g === "number") {
      console.log(g);
      return g * $.$gram.$1pate_thar;
    } else {
      throw new Error("NAN is found.");
    }
  }
  public convertG2KPY(g: number): number[] {
    /*
     * @param {number} g
     * @return {number[]}
     */
    if (typeof g === "number") {
      let [temp, kyat, pae, yway] = [0, 0, 0, 0];
      temp = g / $.$gram.$1kyat_thar;
      // check if integer
      if (temp % 1 === 0) {
        // return k,p,y
        return [(kyat = temp), pae, yway];
      } else {
        kyat = ~~temp; // get kyat value
        temp = kyat > 0 ? (temp % kyat) * 16 : temp * 16;
        pae = ~~temp; // get pae value
        temp = pae > 0 ? (temp % pae) * 8 : temp * 8;
        // return k,p,y
        return [kyat, pae, (yway = temp)];
      }
    } else {
      throw new Error("NAN is found.");
    }
  }
}

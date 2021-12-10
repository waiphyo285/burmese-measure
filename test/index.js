// const mocha = require("mocha");
const assert = require("assert");
const { BurmeseMeasure } = require("../dist/index");

const bmObj = new BurmeseMeasure();

describe("BurmeseMeasure", () => {
  it("Checking convertG2KPY(130.55)", () => {
    const job = bmObj.convertG2KPY(130.55);
    assert.ok(job);
  });
  it("Checking convertKPY2G(7, 13, 6.651)", () => {
    const job = bmObj.convertKPY2G(7, 13, 6.651);
    assert.ok(job);
  });
});

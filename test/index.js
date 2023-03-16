// const mocha = require("mocha");
const assert = require("assert");
const { massConvertor } = require("../dist/index");

describe("Burmese Measure Test \n", () => {
  it("Checking kyatPae2Gram(7, 13.830256)", () => {
    const job = massConvertor.kyatPae2Gram(7, 13.830256);
    console.log("  Result: ", job);
    assert.ok(job);
  });

  it("Checking kyatPaeYway2Gram(7, 13, 6.642048)", () => {
    const job = massConvertor.kyatPaeYway2Gram(7, 13, 6.642048);
    console.log("  Result: ", job);
    assert.ok(job);
  });

  it("Checking gram2KyatPae(128.42)", () => {
    const job = massConvertor.gram2KyatPae(128.42);
    console.log("  Result: ", job);
    assert.ok(job);
  });

  it("Checking gram2KyatPaeYway(128.42)", () => {
    const job = massConvertor.gram2KyatPaeYway(128.42);
    console.log("  Result: ", job);
    assert.ok(job);
  });
});

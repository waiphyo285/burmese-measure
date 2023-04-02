// const mocha = require("mocha");
const assert = require("assert");
const {
  massConvertor,
  lengthConvertor,
  volumeConvertor,
} = require("../dist/index");

describe("Burmese Measure: Mass Test \n", () => {
  it("Checking metric2Burmese(1)", () => {
    const job = massConvertor.metric2Burmese(1);
    console.log("  Result: ", job);
    assert.ok(job);
  });

  it("Checking burmese2Metric(16.3293)", () => {
    const job = massConvertor.burmese2Metric(16.3293);
    console.log("  Result: ", job);
    assert.ok(job);
  });

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

describe("Burmese Measure: Length Test \n", () => {
  it("Checking metric2Burmese(1)", () => {
    const job = lengthConvertor.metric2Burmese(1);
    console.log("  Result: ", job);
    assert.ok(job);
  });

  it("Checking burmese2Metric(1.8288)", () => {
    const job = lengthConvertor.burmese2Metric(1.8288);
    console.log("  Result: ", job);
    assert.ok(job);
  });
});

describe("Burmese Measure: Volume Test \n", () => {
  it("Checking metric2Burmese(1)", () => {
    const job = volumeConvertor.metric2Burmese(1);
    console.log("  Result: ", job);
    assert.ok(job);
  });

  it("Checking burmese2Metric(2.55718)", () => {
    const job = volumeConvertor.burmese2Metric(2.55718);
    console.log("  Result: ", job);
    assert.ok(job);
  });
});

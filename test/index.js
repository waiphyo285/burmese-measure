// const mocha = require("mocha");
const assert = require("assert");
const { BurmeseMeasure } = require("../dist/index");

const bmObj = new BurmeseMeasure();

describe("BurmeseMeasure", () => {
  it("Checking getAllToGram()", () => {
    const job = bmObj.getAllToGram();
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertG2YL(0.136077706)", () => {
    const job = bmObj.convertG2YL(0.136077706);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertG2YG(0.272155412)", () => {
    const job = bmObj.convertG2YG(0.272155412);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertG2Pe(1.020582833)", () => {
    const job = bmObj.convertG2Pe(1.020582833);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertG2Mu(2.041165665)", () => {
    const job = bmObj.convertG2Mu(2.041165665);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertG2Mt(4.08233133)", () => {
    const job = bmObj.convertG2Mt(4.08233133);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertG2K(16.32932532)", () => {
    const job = bmObj.convertG2K(16.32932532);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertG2P(1632.932532)", () => {
    const job = bmObj.convertG2P(1632.932532);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertG2KP(128.42)", () => {
    const job = bmObj.convertG2KP(128.42);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertG2KPY(128.42)", () => {
    const job = bmObj.convertG2KPY(128.42);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertYL2G(1)", () => {
    const job = bmObj.convertYL2G(1);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertYG2G(1)", () => {
    const job = bmObj.convertYG2G(1);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertPe2G(1)", () => {
    const job = bmObj.convertPe2G(1);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertMu2G(1)", () => {
    const job = bmObj.convertMu2G(1);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertMt2G(1)", () => {
    const job = bmObj.convertMt2G(1);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertK2G(1)", () => {
    const job = bmObj.convertK2G(1);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertP2G(1)", () => {
    const job = bmObj.convertP2G(1);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertKP2G(7, 13.830060932364347)", () => {
    const job = bmObj.convertKP2G(7, 13.830060932364347);
    console.log("  Result: ", job);
    assert.ok(job);
  });
  it("Checking convertKPY2G(7, 13, 6.640487458914777)", () => {
    const job = bmObj.convertKPY2G(7, 13, 6.640487458914777);
    console.log("  Result: ", job);
    assert.ok(job);
  });
});

import { add } from "../src/Add";

describe("Add functions", () => {
  it("should add two numbers correctly", () => {
    expect(add("1")).toEqual(1);
  });
});
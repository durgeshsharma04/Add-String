import { add } from "../src/Add";

describe("Add functions", () => {
  it("test with single integer", () => {
    expect(add("1")).toEqual(1);
  });
  it("test with empty string", () => {
    expect(add("")).toEqual(0);
  });
});
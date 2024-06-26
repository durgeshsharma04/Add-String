import { add } from "../src/Add";

describe("Add functions", () => {
  it("test with single integer", () => {
    expect(add("1")).toEqual(1);
  });
  it("test with empty string", () => {
    expect(add("")).toEqual(0);
  });
  it("test with comma seprated number", () => {
    expect(add("1,2,3,4")).toEqual(10);
  });
  it("test with /n", ()=>{
    expect(add("1\n2,3")).toEqual(6)
  })
  it("test with delimiter and \n", ()=>{
    expect(add("//;\n1;2")).toEqual(3)
  })
  it("test with - value show message", ()=>{
    expect(add("//;\n1;2")).toEqual(3)
  })
  it("test return mesaage",()=>{
    expect(add('//;\n-1;2 ;-3')).toBe('Negative numbers not allowed -1,-3')
  })
});
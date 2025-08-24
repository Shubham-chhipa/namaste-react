import { sum } from "../sum";

//this is a single test case
test("Sum function should calculate the sum of two numbers", () => {
  const result = sum(4, 7);

  //Assertion
  expect(result).toBe(11);
}); //test function takes two arguments 1) description ehic is a string, 2) callback function which has code to test
//without assertion and any code inside callback function the test case will be passed but we don't tdo that

import { isValidDecimal } from "./isValidDecimal"

// TODO improve this test to cover all test cases you can think of

it("works", () => {
  expect(isValidDecimal(0.2525)).toBe(true)
  expect(isValidDecimal(220)).toBe(true)
  expect(isValidDecimal("3.5")).toBe(true)
  expect(isValidDecimal(-1.5)).toBe(true)
  expect(isValidDecimal("1.2.3")).toBe(false)
  expect(isValidDecimal("this is a string")).toBe(false)
  expect(isValidDecimal(true)).toBe(false)
  expect(isValidDecimal(null)).toBe(false)
})

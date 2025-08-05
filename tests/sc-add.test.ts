import { StringCalculator } from "../src/string-calculator"; 

describe("String Calculator - Addition", () => {
    let calc: StringCalculator;
    beforeEach(() => {
        calc = new StringCalculator();
    })

    it("should return 0 for empty string", () => {
        expect(calc.add("")).toBe(0)
    })

    it("should return number for single value", () => {
        expect(calc.add("7")).toBe(7);
    })

    it("should return sum of two numbers (comma-separated)", () => {
        expect(calc.add("7,3")).toBe(10);
    })

    it('should return sum for multiple comma-separated numbers', () => {
        expect(calc.add("1,2,3,4,5")).toBe(15);
    });
})
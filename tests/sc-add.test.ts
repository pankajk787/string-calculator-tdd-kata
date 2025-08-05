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

    it('should handle newlines as delimiters', () => {
        expect(calc.add("1\n2,3")).toBe(6);
    });

    it('should support custom delimiter syntax - "//[delimiter]\n[numbers…]"', () => {
        expect(calc.add("//;\n5;6")).toBe(11);
    });

    test('throws error on negative numbers', () => {
        const negativeNumbers = [ -3]
        const negativeNumbersStr = negativeNumbers.join(",");
        expect(() => calc.add(`1,${negativeNumbersStr}`)).toThrow(`negative numbers not allowed: ${negativeNumbersStr}`);
    });
})
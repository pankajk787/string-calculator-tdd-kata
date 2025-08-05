import { StringCalculator } from "../src/string-calculator"; 

describe("String Calculator - Addition", () => {
    let calc: StringCalculator;
    beforeEach(() => {
        calc = new StringCalculator();
    })

    it("should return 0 for empty string", () => {
        expect(calc.add("")).toBe(0)
    })
})
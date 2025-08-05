export class StringCalculator {
    add (numbers: string): number {
        if(numbers === "") {
            return 0;
        }
        const parts = numbers.split(",");
        return parts.reduce((acc, curr)=> {
            return acc + parseInt(curr);
        }, 0);
    }
}
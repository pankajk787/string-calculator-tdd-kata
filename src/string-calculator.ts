export class StringCalculator {
    add (numbers: string): number {
        if(numbers === "") {
            return 0;
        }

        let delimiter = /,|\n/;
        if (numbers.startsWith("//")) {
            const match = numbers.match(/^\/\/(.)\n/);
            if (match) {
            delimiter = new RegExp(match[1] as string);
            numbers = numbers.slice(match[0].length);
            }
        }

        const parts = numbers.split(delimiter);
        return parts.reduce((acc, curr) => {
            return acc + parseInt(curr);
        }, 0);
    }
}
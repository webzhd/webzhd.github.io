
export function classname(...arg: string[]):string {
    return arg.join(' ')
}

export function numberDigits(num: number, n: number): string {
    const numString = num + '';
    const len = numString.length;
    if (len >= n) {
        return numString
    } else {
        return new Array(n-len).fill('0').join('') + numString
    }
}
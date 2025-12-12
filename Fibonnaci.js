/**
 * 
 * @param {*} n 
 * @returns 
 * The Fibonacci Exercise
Fibonacci was an Italian mathematician who came up with the Fibonacci sequence:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...

Where every number is the sum of the two previous ones.
 */
function fibonacciGenerator(n) {
    var result = [];

    if (n === 1) return [0];
    else if (n === 2) return [0, 1];
    else {
        result.push(0);
        result.push(1);
        for (let i = 2; i < n; i++) {
            result.push(result[result.length - 2] + result[result.length - 1]);
        }

    } return result;

}


function solution(a, b) {
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    b = b / gcd(a, b);

    while (b % 2 === 0) b /= 2;
    while (b % 5 === 0) b /= 5;

    return b === 1 ? 1 : 2;
}
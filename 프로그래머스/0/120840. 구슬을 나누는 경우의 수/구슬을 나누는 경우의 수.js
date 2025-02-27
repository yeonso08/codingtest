function solution(balls, share) {
    let numerator = 1;
    let denominator = 1;
    
    let minValue = Math.min(share, balls - share);
    
    for(let i = 0; i < minValue; i++) {
        numerator *= (balls - i);
        denominator *= (i + 1);
    }
    
    return Math.round(numerator / denominator);
}
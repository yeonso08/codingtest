function solution(sides) {
    var answer = 0;
    let big = Math.max(...sides)
    let small = Math.min(...sides)
    
    for(let i = big - small + 1; i <= big; ++i) {
        answer = answer + 1;
    }
    
    for(let i = big + 1; i < big + small; ++i) {
        answer = answer + 1;
    }
    
    return answer;
}
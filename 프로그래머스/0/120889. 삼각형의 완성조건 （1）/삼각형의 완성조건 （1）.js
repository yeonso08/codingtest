function solution(sides) {
    var answer = 0;
    let max = Math.max(...sides);
    let rest = sides[0] + sides[1] + sides[2] - max;
    answer = rest - max;
    
    return answer > 0 ? 1 : 2;
}
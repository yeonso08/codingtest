function solution(number, limit, power) {
    var answer = 0;
    let weapon = 0;
    for(let i = 1; i <= number; ++i ) {
        for(let j = 1; j * j <= i; j++) {
        if(i % j === 0) {
            weapon++;
                if(j * j < i) {
                    weapon++;
                }
        }
    }
    if(weapon > limit) {
        answer += power
    } else {
        answer += weapon
    }
        weapon = 0
        
    }
    return answer;
}
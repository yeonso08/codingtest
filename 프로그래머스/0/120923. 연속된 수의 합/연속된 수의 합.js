function solution(num, total) {
    var answer = [];
    
    if (num % 2 !== 0) {
        let midResult = Math.floor(total / num);
        let midNum = Math.floor(num / 2);
        
        answer.push(midResult);
        
        for (let i = 1; i <= midNum; ++i) {
            answer.unshift(midResult - i);
            answer.push(midResult + i);
        }
    } else {
        let start = total / num - (num / 2 - 0.5);
        
        for (let i = 0; i < num; ++i) {
            answer.push(start + i);
        }
    }
    
    return answer;
}
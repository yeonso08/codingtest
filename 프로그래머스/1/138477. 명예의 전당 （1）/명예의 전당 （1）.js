function solution(k, score) {
    var answer = [];
    let hall = [];
    
    for(let i = 0; i < score.length; i++) {
        hall.push(score[i]);
        hall.sort((a, b) => b - a);
        
        if(hall.length > k) {
            hall.pop();
        }
        
        answer.push(hall[hall.length - 1]);
    }
    
    return answer;
}
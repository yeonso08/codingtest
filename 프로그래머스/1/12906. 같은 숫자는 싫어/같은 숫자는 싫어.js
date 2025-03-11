function solution(arr) {
    var answer = [];
    
    arr.map((item, index) => {
        if(index === 0) {
            answer.push(item)
        } else {
            if(item !== answer[answer.length - 1]) {
                answer.push(item)
            }
        }
    })

    return answer;
}
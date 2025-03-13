function solution(dots) {
    var answer = 0;
    let x = [];
    let y = [];
    
    dots.map(item => {
        x.push(item[0]);
        y.push(item[1]);
    })
    
    answer = (Math.max(...x) - Math.min(...x)) * (Math.max(...y) - Math.min(...y))
    
    return answer;
}
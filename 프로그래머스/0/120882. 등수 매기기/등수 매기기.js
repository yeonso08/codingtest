function solution(score) {
    var answer = [];
    const aver = score.map(item => (item[0] + item[1]) / 2)
    
    const rank = [...aver].sort((a,b) => b - a);
    
    return aver.map(v => rank.indexOf(v) + 1);
}
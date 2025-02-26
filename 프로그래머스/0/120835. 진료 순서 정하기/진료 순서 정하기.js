function solution(emergency) {
    const sorted = [...emergency].sort((a, b) => b - a);
    
    const answer = emergency.map(value => {
        return sorted.indexOf(value) + 1;
    });
    
    return answer;
}
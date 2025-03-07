function solution(s) {
    var answer = '';
    answer = s.split('').sort();
    
    var result = [];
    
    answer.reduce((a, b, index) => { 
        if(index === 0) {
            return b;
        }
        
        if(a === b) {
            result.push(a);
        }
        return b;
    }, '');
    
    answer = answer.filter(item => !result.includes(item));
    
    return answer.join('');
}
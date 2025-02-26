function solution(rsp) {
    var answer = '';
win = {
    '2': '0',
    '0': '5',
    '5': '2'
}
    
        let alphabet = rsp.split('')
for(let i = 0; alphabet.length > i; ++i) {
    answer = answer + win[alphabet[i]]
}
    
    return answer;
}
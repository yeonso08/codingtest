function solution(spell, dic) {
    var answer = 2;
    let word = spell.sort().join('');
    
    for(let i = 0; i < dic.length; ++i) {
        if(word === dic[i].split('').sort().join('')) {
            answer = 1
        }
    }
    
    return answer;
}
function solution(letter) {
    var answer = '';
    morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
}
    
    let alphabet = letter.split(' ')
    
    for(let i = 0; alphabet.length > i; ++i) {
        answer = answer + morse[alphabet[i]]
    }
    
    return answer;
}
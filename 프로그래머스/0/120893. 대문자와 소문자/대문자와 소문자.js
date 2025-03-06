function solution(my_string) {
    var answer = '';
    function isAllLowerCase(str) {
        return str === str.toLowerCase();
    }
    function isAllUpperCase(str) {
       return str === str.toUpperCase();
    }
    
    for(let i = 0; my_string.length > i; ++i) {
        if(isAllLowerCase(my_string[i])) {
            answer += my_string[i].toUpperCase()
        }
          if(isAllUpperCase(my_string[i])) {
            answer += my_string[i].toLowerCase()
        }
    }
    
    return answer;
}
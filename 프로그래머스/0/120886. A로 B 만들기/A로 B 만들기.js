function solution(before, after) {
    var answer = 0;
    let beforeArr = before.split('').sort();
    let afterArr = after.split('').sort()
    
    for(let i = 0; beforeArr.length > i; ++i) {
        if(beforeArr[i] === afterArr[i]) {
            answer += 1
        }
    }
    
    if(beforeArr.length === answer) {
        return 1;
    } else {
        return 0;
    }
    
}
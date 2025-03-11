function solution(array) {
    var answer = 0;
    array.map(item => {
        String(item).split('').map(subItem => {
            if(subItem === '7') {
                ++answer
            }
        })
    })
    return answer;
}
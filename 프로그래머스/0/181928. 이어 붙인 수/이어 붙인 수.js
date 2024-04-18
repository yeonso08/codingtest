function solution(num_list) {
    var answer = 0;
    const odd = Number(num_list.filter((item)=>item%2===1).join(''));
    const even = Number(num_list.filter((item)=> item%2 ===0).join(''));
    answer = odd + even;
    return answer;
}
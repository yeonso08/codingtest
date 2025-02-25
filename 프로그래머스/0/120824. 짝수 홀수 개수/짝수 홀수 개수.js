function solution(num_list) {
    let even = 0;
    let odd = 0;
    for(let i = 0; num_list.length > i; ++i) {
        if(num_list[i] % 2 === 0) {
            ++even
        } else {
            ++odd
        }
    }
    
    return [even, odd];
}
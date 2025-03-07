function solution(my_string) {
    const elements = my_string.split(' ');
    
    let result = +elements[0];
    
    for (let i = 1; i < elements.length; i += 2) {
        const operator = elements[i];
        const operand = +elements[i + 1];
        
        if (operator === '+') {
            result += operand;
        } else if (operator === '-') {
            result -= operand;
        }
    }
    
    return result;
}
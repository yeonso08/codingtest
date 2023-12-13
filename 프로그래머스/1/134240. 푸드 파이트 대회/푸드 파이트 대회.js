function solution(food) {
    var answer = '0';
    for (let i = food.length - 1; i >= 1; i--) {
        let foodType = i.toString();
        let amount = Math.floor(food[i] / 2);

        for (let j = 0; j < amount; j++) {
            answer = foodType + answer + foodType;
        }
    }
    return answer;
}
function solution(name, yearning, photo) {
    var answer = [];
    var scoreMap = new Map();
    for (let i = 0; i < name.length; i++) {
        scoreMap.set(name[i], yearning[i]);
    }
    
    for (let i = 0; i < photo.length; i++) {
        var photoScore = 0;
        for (let j = 0; j < photo[i].length; j++) {
            if (scoreMap.has(photo[i][j])) {
                photoScore += scoreMap.get(photo[i][j]);
            }
        }
        answer.push(photoScore);
    }

    return answer;
}
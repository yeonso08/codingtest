function solution(keyinput, board) {
    var answer = [0, 0];
    
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    for (let key of keyinput) {
        if (key === 'up' && answer[1] < maxY) {
            answer[1]++;
        } else if (key === 'down' && answer[1] > -maxY) {
            answer[1]--;
        } else if (key === 'left' && answer[0] > -maxX) {
            answer[0]--;
        } else if (key === 'right' && answer[0] < maxX) {
            answer[0]++;
        }
    }
    
    return answer;
}
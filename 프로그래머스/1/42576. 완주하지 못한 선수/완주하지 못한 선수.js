function solution(participant, completion) {
    const participantSort = participant.sort();
    const completionSort = completion.sort();
    
    for(let i = 0; i < participantSort.length; i++) {
        if(participantSort[i] !== completionSort[i]) {
            return participantSort[i];
        }
    }
}
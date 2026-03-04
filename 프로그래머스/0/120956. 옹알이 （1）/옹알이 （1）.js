function solution(babbling) {
  let answer = 0;

  for (let word of babbling) {

    word = word.replaceAll("aya", " ");
    word = word.replaceAll("ye", " ");
    word = word.replaceAll("woo", " ");
    word = word.replaceAll("ma", " ");

    if (word.trim() === "") {
      answer++;
    }
  }

  return answer;
}
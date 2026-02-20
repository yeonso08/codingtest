function solution(array, commands) {
  const answer = [];

  const hook = (i, j, k) => {
    const sliced = array.slice(i - 1, j);
    sliced.sort((a, b) => a - b);
    answer.push(sliced[k - 1]);
  };

  for (const [i, j, k] of commands) {
    hook(i, j, k);
  }

  return answer;
}
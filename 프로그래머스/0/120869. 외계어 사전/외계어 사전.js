function solution(spell, dic) {
  const target = [...spell].sort().join("");

  for (const word of dic) {
    const sorted = word.split("").sort().join("");
    if (sorted === target) return 1;
  }
  return 2;
}

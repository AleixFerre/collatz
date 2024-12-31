const solutionSet = new Set<number>();

function collatzValid(n: number): boolean {
  if (solutionSet.has(n)) {
    return true;
  }

  solutionSet.add(n);

  if (n % 2 === 0) {
    return collatzValid(n / 2);
  } else {
    return collatzValid(3 * n + 1);
  }
}

function isCollatzValidFor(n: number): boolean {
  for (let i = 1; i < n; i++) {
    if (i % 2 === 0) continue;
    if (!collatzValid(i)) {
      return false;
    }
  }
  return true;
}

console.time("isCollatzValidFor");
console.log(isCollatzValidFor(100000000));
console.timeEnd("isCollatzValidFor");

console.log(solutionSet.size);

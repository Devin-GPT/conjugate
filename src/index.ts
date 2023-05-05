//Just a quick redeclare for easy quick readability. Wouldnt do this in prod code
type N = number;
//Change this list to change Input list
const partition: N[] = [5, 3, 1];

const getConjugates = (partition: N[]): N[] => {
    
  const conjugate: N[] = [];
  let max: N = 0;

  for (let i = 0; i < partition.length; i++) {
      const rowLength: N = partition[i];
      max = Math.max(max, rowLength);

      for (let j = 0; j < rowLength; j++) {
          if (conjugate[j] === undefined) {
              conjugate[j] = 0;
          }
          conjugate[j]++;
      }
  }

  // Trim trailing zeros if any
  while (conjugate.length > 0 && conjugate[conjugate.length - 1] === 0) {
      conjugate.pop();
  }

  return conjugate;
};
function main(): void {
    const result: N[] = getConjugates(partition);

    console.log("Original partition:", partition);
    console.log("Conjugate partition:", result);
}

main();
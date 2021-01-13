function duplicateLetters(lettersString) {
  const letters = lettersString.split('');
  let largest = 0;
  letters.forEach((value) => {
    let currentCount = 0;
    letters.forEach((letter) => {
      if (letter === value) currentCount += 1;
    });
    if (currentCount > largest) largest = currentCount;
  });
  return largest > 1 && largest;
}

export { duplicateLetters };

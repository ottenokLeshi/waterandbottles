module.exports = (redBottles, blueBottles) => {
  if (!Array.isArray(redBottles) || !Array.isArray(blueBottles)) {
    throw new Error('На вход должны подаваться масссивы');
  }

  let resultArray = blueBottles.map(() => []);
  let resultArrayIndex = 0;

  redLoop:
  for (let redIndex = 0; redIndex < redBottles.length; redIndex += 1) {
    for (let blueIndex = 0; blueIndex < blueBottles.length; blueIndex += 1) {

      if (blueBottles[blueIndex] === 0) continue;
      if (redBottles[redIndex] === 0) continue redLoop;

      if (redBottles[redIndex] < blueBottles[blueIndex]) {
        blueBottles[blueIndex] -= redBottles[redIndex];
        resultArray[resultArrayIndex].push({
          bottleNumber: redIndex + 1,
          poured: redBottles[redIndex],
        });
        continue redLoop;
      }

      if (redBottles[redIndex] > blueBottles[blueIndex]) {
        redBottles[redIndex] -= blueBottles[blueIndex];
        resultArray[resultArrayIndex].push({
          bottleNumber: redIndex + 1,
          poured: blueBottles[blueIndex],
        });
        blueBottles[blueIndex] = 0;
        resultArrayIndex += 1;
        continue;
      }

      if (redBottles[redIndex] === blueBottles[blueIndex]) {
        resultArray[resultArrayIndex].push({
          bottleNumber: redIndex + 1,
          poured: blueBottles[blueIndex],
        });
        redBottles[redIndex] = 0;
        blueBottles[blueIndex] = 0;
        resultArrayIndex += 1;
        continue redLoop;
      }
    }
  }

  try {
    resultArray = resultArray.map(element => JSON.stringify(element));
  } catch (err) {
    throw err;
  }
  return resultArray;
};

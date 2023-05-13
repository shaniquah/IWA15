// Declaring array with array constructor
let example1 = new Array('Otshepeng', 'female', 21, true);
console.log(example1[0]);
console.log(example1)

// Declaring array with literal notation
let example2 = ['female', 21, 'Otshepeng', true];
console.log(example2[1]);
console.log(example2[3]);
console.log(example2)


const data = {
    lists: [
      ['first', [15, 11, 13, 7, 5]],
      ['second', [2, 6, 8, 4, 14, 12, 10]],
      ['third', [9, 3, 1]],
    ],
  };
  
  // Only edit below
  
  const result = [];
  
  const extractBiggest = () => {
    let maxIndex = 0;
    let maxValue = -1;
  
    data.lists.forEach(([_, arr], index) => {
      const lastValue = arr[arr.length - 1];
      if (lastValue > maxValue) {
        maxValue = lastValue;
        maxIndex = index;
      }
    });
  
    if (maxIndex >= 0) {
      const currentArray = data.lists[maxIndex][1];
      currentArray.pop();
      return maxValue;
    }
  
    return null;
  };
  
  // Only edit above
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  result.push(extractBiggest());
  
  console.log(result);
  
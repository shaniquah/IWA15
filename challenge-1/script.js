const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

// const { first = 1 } = data.first || {}
// const { second = 1 } = data.second || {}
// const { third = 1 } = data.third || {}


const result = []

const extractBiggest = () => {
    // const first = data.lists[0][1]
    // const second = data.lists[1][1]
    // const third = data.lists[2][1]

    // const maxFirst = Math.max(first)
    // const maxSecond = Math.max(second)
    // const maxThird = Math.max(third)

    let maxIndex = 0;
    let maxValue = 0;


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

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)
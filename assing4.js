function sumofsquares(arr) {
    let sum = 0;
  

    for (let i = 0; i < arr.length; i++) {
      sum += Math.pow(arr[i], 2);
    }
  

    return sum;
  }
  
    const numbers = [1, 2, 4,7,8];
  const sumsquares = sumofsquares(numbers);
  console.log(sumsquares);
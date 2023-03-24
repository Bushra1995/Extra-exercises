// ------------------- Problem 1

// ------------------- Problem 2

// ------------------- Problem 3

// ------------------- Problem 4



// ------------------- Problem 5 
// For loop

// function powerOfTwoForLoop(arr) {
//     const result = [(1,2,3)];
//     for(let i = 0; i < arr.length; i++) {
//       result.push(Math.pow(2, arr[i]));
//     }
//     return result;
//   }
//   console.log(powerOfTwoForLoop([1,2,3]));

// ForEach loop

// function powerOfTwoForEach(arr) {
  //   const result = [(1,2,3)];
  //   arr.forEach(element => {
  //     result.push(Math.pow(2, element));
  //   });
  //   return result;
  // }
  // console.log(powerOfTwoForEach([1,2,3]));
  
  // Map loop (which is the best way because it combines the iteration and the mapping into one step, making the code cleaner)
  
  function powerOfTwoMap(arr) {
    const result = [(1,2,3)];
    arr.map(element => {
      result.push(Math.pow(2, element));
    });
    return result;
  }
  console.log(powerOfTwoMap([1,2,3]));
  


  // ------------------- Problem 6

  function evenOrOdd(arr) {
    const result = arr.map((num) => {
      if (typeof num !== "number" || isNaN(num)) {
        return "N/A";
      } else if (num % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    });
    return result;
  }
  console.log(evenOrOdd([1, 2, "Bushra", 3, 4, 5]))



  // ------------------- Problem 7

function fizzbuzz(numbers) {
  const output = [];

  numbers.forEach((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
      output.push("Fizz Buzz");
    } else if (number % 3 === 0) {
      output.push("Fizz");
    } else if (number % 5 === 0) {
      output.push("Buzz");
    } else {
      output.push(number);
    }
  });

  return output;
}

console.log(fizzbuzz([3, 5, 9, 10, 12, 14, 15, 20, 30, 32]));




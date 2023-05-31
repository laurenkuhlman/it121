// Recursive function that counts up to 10
function counter(i) {
  // If i is greater than 10, stop the recursion
  if (i > 10) {
    return;
  }

  // Otherwise, log the current value of i and recursively call the function with i + 1
  console.log(i);
  counter(i + 1);
}

// Function that outputs the value one to the console
const one = () => console.log("one");

// Function that outputs the value two to the console
const two = () => console.log("two");

// Function that outputs the value three to the console, and then invokes the first two functions
const three = () => {
  console.log("three");
  one();
  two();
};

// Function that outputs the word four to the console and also uses setTimeout() to invoke the first function immediately and then the third function
const four = () => {
  console.log("four");
  setTimeout(one, 0);
  three();
};

// Invoke the counter function with an initial value of 0
counter(0);

// Invoke the four function
four();

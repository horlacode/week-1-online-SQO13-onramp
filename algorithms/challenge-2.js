function fizzBuzz(input){
  let result;
if (input % 3 === 0 && input % 5 === 0) {
  result = 'fizzBuzz';
} else if (input % 3 === 0) {
  result = 'fizz';
} else if (input % 5 === 0) {
  result = 'buzz';
} else {
  result = input;
}
return result;


}


console.log(fizzBuzz());

module.exports = fizzBuzz
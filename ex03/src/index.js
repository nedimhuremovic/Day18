// Only change code below this line
function* myGenerator(args) {
   yield* [1,2,3,4,5];
   yield* "Arena";
   yield* args;
  }

const iterator = myGenerator([6,7,8]);

const generatorArray = [];

for(var i = 0; i < 13; i++){
  generatorArray.push(iterator.next().value);
}
console.log(generatorArray);
/*
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);
  console.log(iterator.next().value);

*/


  // Only change code above this line
  module.exports = {/*generatorArray,*/ myGenerator };
  
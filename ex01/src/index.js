let myArr = [];
// Only change code below this line
function* multiplication(x) {
  for (let i = 0; i < x; i++) {
    x *= 2;
    yield x;
    myArr.push(x);
  }
}

const num = multiplication(3);
for (let i = 0; i < 3; i++) {
  console.log(num.next());
}
// Only change code above this line
module.exports = multiplication;

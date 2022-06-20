const addFive = (a) => a + 5;

const substractTwo = (a) => a - 2;

const multiplyFour = (a) => a * 4;

evaluate = myCompose(addFive, substractTwo, multiplyFour);
evaluate(5);
evaluate = myPipe(addFive, substractTwo, multiplyFour);
evaluate(5);

function myPipe(...args) {
  return function (start) {
    let ans = start;
    for (let i = 0; i < args.length; i++) {
      ans = args[i](ans);
    }
    console.log(ans);
  };
}

function myCompose(...args) {
  return function (start) {
    let ans = start;
    for (let i = 0; i < args.length; i++) {
      ans = args[args.length - 1 - i](ans);
    }
    console.log(ans);
  };
}

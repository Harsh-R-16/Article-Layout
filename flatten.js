let arr = [1, 2, 3, [[4], [5, [6], 7]], [[[8], 9], 10], 11];
let res = [];

function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") flatten(arr[i]);
    else res.push(arr[i]);
  }
}
flatten(arr);

console.log(res);

function promisify(val, delay) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(val);
    }, delay);
  });
}

// let p = Promise.all([promisify("harsh", 1000), promisify("virat", 2000)]);
let p = promiseAll([promisify("harsh", 1000), promisify("virat", 2000)]);

p.then((res) => console.log(res)).catch((err) => console.error(err));

function promiseAll(promises) {
  let result = [];
  return new Promise(function (resolve, reject) {
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((res) => {
          result.push(res);
          if (i === promises.length - 1) resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
}

/*
    componentDidMount first time run 
    useEffect with [] empty array

    componentDidUpdate runs on changes to the component
    useEffect with [some dependancies] 

    (prevProps and prevState)

    componentWillUnmount
    it will run at remmoved from dom.

    life cycle methods define complete lifecycle of a component like render update and unmount


*/
// object.method implicit binding and object.method.call or apply or bind  then it is explicit binding.

// scope means context of that variable.
// lexical scope for function inside function use variables.
// function with its surrounding state means bundled with its su rounding state.
// it is a combination of a function with its surrounding states
// clouser gives access inner function to its outer function's scope.

// clouser se private variable we can make.
// module pattern means creating private methods and public method can use private methods but private will not be accessable outside that function.

// we just return what is public not all function and variables.
// function inside function then inner function forms clouser.

// function which has not name called anonymous function
// used as call back function or used with variables
// ability of function to use variables outside its scope or function its called clousers.

// create copy with spread operator like object or array copy.
// collection of key value pair.

// currying means function take one argument and expext other argument as it return a function.

// event loop in node allows node to perform non blocking i/o operations;

// javascript is single threaded and event loop that allows us to perform non blocking io operarion
// no block of main thread and run outside main thread and when process done callback function runs in main thread.

// asyncronous means something take time it will come back in non blocking it will go to next line and not come back to that line again.
// chat application and game and stream servers.
// fast io operation

// object to array or ara to obj and str to arr and obj with spresd operator.

// make styles consistence across all browsers.

// take component and return new component
// react portals used to render something outside dom tree.
// single source and state read only and pure functions
// view action dispatcher store view

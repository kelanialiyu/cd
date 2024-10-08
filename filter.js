// filter

let nums = [1, 2, 3, 3, 3, 4, 5, 6, 7];

const lessThan = (input, n = 2) => {
  let result = [];
  for (let e = 0; e < input.length; e++) {
    let ele = input[e];
    if (ele < n) {
      result.push(ele);
    }
  }
  return result;
};

console.log(lessThan(nums));

const greaterThan = (input, n = 2) => {
  let result = [];
  for (let e = 0; e < input.length; e++) {
    let ele = input[e];
    if (ele > n) {
      result.push(ele);
    }
  }
  return result;
};

console.log(greaterThan(nums, 3));

const equalTo = (input, n = 2) => {
  let result = [];
  for (let e = 0; e < input.length; e++) {
    let ele = input[e];
    if (ele == n) {
      result.push(ele);
    }
  }
  return result;
};

console.log(equalTo(nums, 3));

const filter = (input, pass) => {
  let result = [];
  for (let e = 0; e < input.length; e++) {
    let ele = input[e];
    if (pass(ele)) {
      result.push(ele);
    }
  }
  return result;
};

console.log(filter(nums, (e) => e == 1));

const mixed = [1,"s",true, null, {}, Symbol('hi'),[], undefined]

let num = mixed.filter(x=> typeof x ==="number")

let bool = mixed.filter(ife => typeof ife =="boolean")

let sym = mixed.filter(ow => typeof ow == "symbol")

console.log(num, bool, sym)
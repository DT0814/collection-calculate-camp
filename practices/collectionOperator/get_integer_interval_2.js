'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  let res = [];
  if (number_a === number_b && number_a % 2 !== 0) {
    return res;
  }
  number_a = number_a % 2 === 0 ? number_a : number_a + 1;
  number_b = number_b % 2 === 0 ? number_b : number_b + 1;
  if (number_a < number_b) {
    for (; number_a <= number_b; number_a += 2) {
      res.push(number_a);
    }
  } else {
    for (; number_a >= number_b; number_a -= 2) {
      res.push(number_a);
    }
  }
  return res;
}

module.exports = get_integer_interval_2;

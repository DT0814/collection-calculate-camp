'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  let res = [];
  if (number_a < number_b) {
    for (; number_a <= number_b; number_a += 1) {
      res.push(number_a);
    }
  } else {
    for (; number_a >= number_b; number_a -= 1) {
      res.push(number_a);
    }
  }
  return res;
}

module.exports = get_integer_interval;


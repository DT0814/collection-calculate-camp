'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let res = [];
  if (number_a < number_b) {
    for (; number_a <= number_b; number_a += 1) {
      res.push(String.fromCharCode(number_a + 96));
    }
  } else {
    for (; number_a >= number_b; number_a -= 1) {
      res.push(String.fromCharCode(number_a + 96));
    }
  }
  return res;
}

module.exports = get_letter_interval;

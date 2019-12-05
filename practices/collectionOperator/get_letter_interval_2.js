'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  let res = [];
  if (number_a < number_b) {
    for (; number_a <= number_b; number_a += 1) {
      push(number_a - 1, res);
    }
  } else {
    for (; number_a >= number_b; number_a -= 1) {
      push(number_a - 1, res);
    }
  }
  return res;
}

function push(number, arr) {
  let item = '';
  if (number >= 26) {
    item += String.fromCharCode(number / 26 + 96);
  }
  item += String.fromCharCode(number % 26 + 97);
  arr.push(item);
}

module.exports = get_letter_interval_2;


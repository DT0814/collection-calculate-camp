'use strict';

const get_integer_interval_2 = require('../../practices/collectionOperator/get_integer_interval_2.js');

describe('get_integer_interval_2', function () {

  const collection_a = [2, 4, 6, 8, 10];
  const collection_b = [10, 8, 6, 4, 2];

  it('根据给出的两个数字得到自增的偶数区间', function() {

    const result = get_integer_interval_2(1, 10);
    expect(result).toEqual(collection_a);
  });

  it('根据给出的两个数字得到自减的偶数区间', function() {

    const result = get_integer_interval_2(10, 1);
    expect(result).toEqual(collection_b);
  });

  it('给定两个相同的偶数得到只含此数字的数组', function() {

    const result = get_integer_interval_2(10, 10);
    expect(result).toEqual([10]);
  });

  it('给定两个相同的偶数得到只含此数字的数组', function() {

    const result = get_integer_interval_2(5, 5);
    expect(result).toEqual([]);
  });
});


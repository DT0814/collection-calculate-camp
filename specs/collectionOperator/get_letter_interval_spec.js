'use strict';

const get_letter_interval = require('../../practices/collectionOperator/get_letter_interval.js');

describe('get_letter_interval', function () {

  const collection_a = ['a', 'b', 'c', 'd', 'e'];
  const collection_b = ['e', 'd', 'c', 'b', 'a'];

  it('根据给出的两个数字得到对应自增的字母区间', function() {

    const result = get_letter_interval(1, 5);
    expect(result).toEqual(collection_a);
  });

  it('根据给出的两个数字得到对应自减的字母区间', function() {

    const result = get_letter_interval(5, 1);
    expect(result).toEqual(collection_b);
  });

  it('给定两个相同的数字得到只含此数字对应字母的数组', function() {

    const result = get_letter_interval(5, 5);
    expect(result).toEqual(['e']);
  });
});

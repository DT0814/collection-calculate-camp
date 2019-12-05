'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  const res = [];
  collection_a.concat(collection_b).forEach(it => {
    if(res.indexOf(it) === -1){
      res.push(it);
    }
  })
  return res;
}

module.exports = get_union;


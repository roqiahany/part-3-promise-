function one() {
  return new Promise(function (callback) {
    console.log('one');
    callback();
  });
}
function two() {
  return new Promise(function (callback) {
    console.log('two');
    callback();
  });
}
function fnish() {
  console.log('finish');
}

// two().then(function () {
//   one();
// });

two()
  .then(function () {
    return one();
  })
  .then(function () {
    fnish();
  });

let add = function (x) {
  return function (y) {
    console.log(x + y);
  };
};

add(2);

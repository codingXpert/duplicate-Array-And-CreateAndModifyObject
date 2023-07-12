function duplicate(arr) {
  var length = arr.length;
  for (var i = 0; i < length; i++) {
    arr.push(arr[i]);
  }
  return arr;
}

var arr = [1, 2];
duplicate(arr)
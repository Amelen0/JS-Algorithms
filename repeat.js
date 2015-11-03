function repeat(str, num) {
  var accumulatedstr = '';
  while(num > 0){
    accumulatedstr += str;
    num --;

  }
  return accumulatedstr;
}

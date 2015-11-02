// Check if a string's first argument ends with a string's second argument i.e target string
function end(str, target) {
  if(str.substr(-target.length) === target){
    return true;
  }
  else{
    return false;
  }
}

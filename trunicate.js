function trunicate(str, num){
  if (str.length <= num){
    return str;
    if (num <= 3)
    return str.substr(0,num) + "...";
  return str.substr(0,num-3) + "...";
  }
  }

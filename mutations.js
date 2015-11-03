function mutations(arr){
 var test = arr[1].toLowerCase();
 var target = arr[0].toLowerCase();
 test = test.split('');
 target = target.split('');
 for(i=0;i< arr.length; i++){
  if (target.indexOf(test[i]) < 0)
      return false;
 }
 return true;
}

const diamond = function(num,str){
  const string = function(n,str){
    if (n <= 0){
      return "";
      }
    return str + string(n-1,str);
    }
  const spaces = function(space) {
    if(space <= 0) {
      return "";
      }
    return " "+ spaces(space-1);
    }
  const triangleStars = function (num) {
   const arg=num/2-1;
   const line= function (a,space) {
      if (a >=num+1){
       return "";
       } 
      console.log (spaces(space)+ string(a,str));
        return line(a+2,space-1);
      }
       return line(1,arg);
      }
  const flipped = function (num) { 
   const arg = num-2;
   const line= function (a,space) { 
     if (a<=0){
      return "";
      } 
     console.log (spaces(space)+string(a,str));
      return line(a-2,space+1);
     }
    return line(arg,1)
  }
if (num%2 !== 0){ 
  triangleStars(num);
  flipped(num);
  } else {
  triangleStars(num+1);
  flipped(num+1);
     }
 }

export default function randomNumber(n) {
  /*
    Your implementation, using the flip() function
  */
 var nInt = parseInt(n,10);
 if(nInt<1 || nInt>=1000000){
     throw new Error ("n is out of range, n must be greater than 0 and less than 1000000");
 }
  
  var bin = nInt.toString(2);
  var randNum = '';
  
  for(var i=1; i<=bin.length;i++){
      randNum = randNum+Number(flip());
      let currentRandNum = parseInt(randNum,2);
          currentRandNum = currentRandNum <<bin.length-i;//bin.length-i

      if(currentRandNum>=nInt){
          currentRandNum = currentRandNum >>(bin.length-i)+1; 
          currentRandNum = currentRandNum <<1;
          randNum = currentRandNum.toString(2);
      }
      
  }
  
  return parseInt(randNum,2);
}

function flip() {
  return Math.random() >= 0.5;
}

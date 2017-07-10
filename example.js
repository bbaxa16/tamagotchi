var counter = 5;
var setIntervalId = setInterval(function(){
  counter --;
  console.log('tik tok');
  if(counter === 0){
    clearInterval(setIntervalId);
  }
}, 1000)

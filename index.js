const tamagotchi1 = {
  name: "Fiona",
  creatureType: "Dragon",
  foodInTummy: 15,
  restedness: 15,
  health: 15,
  cry(){
    this.foodInTummy = this.foodInTummy - 1;
    console.log(this.name + ": Waaaaaaaa!!!");
    console.log(this.name + ": Food in tummy: " + this.foodInTummy);
  },
  puke(){
    this.health = this.health -1;
    console.log(this.name + ": Bleeeeh :O~~)");
    console.log(this.name + ": Health level: " + this.health);
  },
  yawn(){
    this.restedness = this.restedness -1;
    console.log(this.name + ": Yaaaawwwwn!");
    console.log(this.name + ": Restedness: " + this.restedness);
  },
  start(){
    const setIntervalHungry = setInterval(function() { hungerTimer(tamagotchi1);
    if(tamagotchi1.foodInTummy === 0){
      clearInterval(setIntervalHungry);
      alert(tamagotchi1.name + " is too hungry to go on!");
    }
}, 6000);

    const setIntervalRest = setInterval(function() { yawnTimer(tamagotchi1);
    if(tamagotchi1.restedness === 0){
      clearInterval(setIntervalRest);
      alert(tamagotchi1.name + " is too tired to go on!")
    }
     }, 10000);
    const setIntervalSick = setInterval(function() { sickTimer(tamagotchi1);
    if(tamagotchi1.health === 0){
      clearInterval(setIntervalSick);
      alert(tamagotchi1.name + " is too sick to go on!")
    }
    }, 25000);

  }
};

const tamagotchi2 = {
  name: "Stuart",
  creatureType: "Bird",
  foodInTummy: 15,
  restedness: 15,
  health: 15,
  cry(){
    this.foodInTummy = this.foodInTummy - 1;
    console.log(this.name + ": Waaaaaaaa!!!");
    console.log(this.name + ": Food in tummy: " + this.foodInTummy);
  },
  puke(){
    this.health = this.health -1;
    console.log(this.name + ": Bleeeeh :O~~)");
    console.log(this.name + ": Health level: " + this.health);
  },
  yawn(){
    this.restedness = this.restedness -1;
    console.log(this.name + ": Yaaaawwwwn!");
    console.log(this.name + ": Restedness: " + this.restedness);
  },
  start(){
    const setIntervalHungry = setInterval(function() { hungerTimer(tamagotchi2);
    if(tamagotchi2.foodInTummy === 0){
      clearInterval(setIntervalHungry);
      alert(tamagotchi2.name + " is too hungry to go on!");
    }
}, 6000);
  const setIntervalRest = setInterval(function() { yawnTimer(tamagotchi2);
    if(tamagotchi2.restedness === 0){
      clearInterval(setIntervalRest);
      alert(tamagotchi2.name + " is too tired to go on!")
    }
  }, 10000);
  const setIntervalSick = setInterval(function() { sickTimer(tamagotchi2);
    if(tamagotchi2.health === 0){
      clearInterval(setIntervalSick);
      alert(tamagotchi2.name + " is too sick to go on!")
    }
  }, 25000);
  }
};

const player = {
  name: "Leah",
  sayName(){
    console.log("Hi my name is " + this.name);
  },
  feedTamagotchi(){
    if (tamagotchi === tamagotchi1){
      tamagotchi1.foodInTummy = tamagotchi1.foodInTummy + 1;
      console.log(tamagotchi1.name + ": Food in tummy: " + tamagotchi1.foodInTummy);
    }
    else if(tamagotchi === tamagotchi2){
    tamagotchi2.foodInTummy = tamagotchi2.foodInTummy + 1;
    console.log(tamagotchi2.name + ": Food in tummy: " + tamagotchi2.foodInTummy);
    } 
  },
  medicateTamagotchi(tamagotchi){
    if(tamagotchi === tamagotchi1){
    tamagotchi1.health = tamagotchi1.health +1;
    console.log(tamagotchi1.name + ": Health: " + tamagotchi1.health);
  }
    else if (tamagotchi === tamagotchi2 ) {
    tamagotchi2.health = tamagotchi2.health +1;
    console.log(tamagotchi2.name + ": Health: " + tamagotchi2.health);
  };
},
  knockoutTamagotchi(tamagotchi){
    if(tamagotchi === tamagotchi1){
    tamagotchi1.restedness = tamagotchi1.restedness +1;
    console.log(tamagotchi1.name + ": Restedness " + tamagotchi1.restedness);
  }
    else if (tamagotchi === tamagotchi2 ) {
    tamagotchi2.restedness = tamagotchi2.restedness +1;
    console.log(tamagotchi2.name + ": Restedness: " + tamagotchi2.restedness);
  };
  }
};

function hungerTimer(tamagotchi){
  if(tamagotchi === tamagotchi1){
    tamagotchi1.cry();
  }
  else if (tamagotchi === tamagotchi2 ) {
    tamagotchi2.cry();
  }
}
function yawnTimer(tamagotchi){
  if(tamagotchi === tamagotchi1){
    tamagotchi1.yawn();
}
  else if (tamagotchi === tamagotchi2 ) {
    tamagotchi2.yawn();
  }
}
function sickTimer(tamagotchi){
  if(tamagotchi === tamagotchi1){
    tamagotchi1.puke();
  }
  else if (tamagotchi === tamagotchi2 ) {
    tamagotchi2.puke();
  };
}
tamagotchi1.start();
tamagotchi2.start();
// yawnTimer(()=>{
//   tamagotchi1.yawn();
//   tamagotchi2.yawn();
// }, 10000);
// sickTimer(()=>{
//   tamagotchi1.puke();
//   tamagotchi2.puke();
// }, 25000)
//clearInterval(hungerTimer);
// player.sayName();
// player.feedTamagotchi();
// player.medicateTamagotchi(tamagotchi1);
// player.medicateTamagotchi(tamagotchi2);
// player.knockoutTamagotchi(tamagotchi1);
// player.knockoutTamagotchi(tamagotchi2);
// tamagotchi1.cry();
// tamagotchi1.puke();
// tamagotchi1.yawn();
// tamagotchi2.cry();
// tamagotchi2.puke();
// tamagotchi2.yawn();

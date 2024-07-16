import inquirer from "inquirer";

//-----------------------------games variable-------------------------------------

let enemies = ["skeleton","Zombie","Warrior","Assassin"]
let maxEnemyHealth = 75
let enemyAttackDamageToHero = 25

//-----------------------------player variable-----------------------------------------

let heroHealth = 100
let attackDamageToEnemy = 50
let numHealthPotion = 3
let HealthPotionHealAmount = 30 
let HealthPotionDropChance = 50

//-------------------------------while loop condition-----------------------------------

let gameRunning = true

console.log("Welcome to deadZoon!");

Game:
while(gameRunning) {
     let enemyHealth = Math.floor(Math.random() *maxEnemyHealth +1)
     let enemyIndex = Math.floor(Math.random() *enemies.length)
     let enemy = enemies[enemyIndex]

     console.log(`# ${enemy} has appeared #\n`);

 while (enemyHealth > 0){

   console.log(`Your Health: ${heroHealth}`);
   console.log(`${enemy} Health:${enemyHealth}`);
      
([
const options = await inquirer.prompt([
 {
      type:'list',//or'input','confirm',etc.,depending on your need 
      name:'ans',
      message:"What would you like to do?",
      choices:["1.Attack" , "2.Take health potion" , "3.Run"]
  }
   ])

   if (options.ans === "1.Attack"){
      let attackDamageToEnemy = 50
      let damageToEnemy = Math.floor(Math.random() *attackDamageToEnemy + 1)
      let damageToHero = Math.floor(Math.random()* enemyAttackDamageToHero + 1)
      enemyHealth -=  damageToEnemy
      heroHealth -= damageToHero

      console.log(`you strike the ${enemy} for ${damageToEnemy}`);
      console.log(`${enemy} strike you for ${damageToHero} damage.`);
      
     if(heroHealth < 1){
      console.log("You have taken too much damage. You are too week to continue.");
      break;
     }

    }
    else if(options.ans === "2.Take health potion"){
      if( numHealthPotion > 0 ){
         heroHealth += HealthPotionHealAmount
         numHealthPotion--

         console.log(`You use health potion for${HealthPotionHealAmount}`);
         console.log(`You now have ${heroHealth} health`);
         console.log(`You have ${numHealthPotion} health potions left.`);
      }else{
         console.log(`You have no health potions left. defeat enemy for a chance get health potion`);
      }

    }
    else if(options.ans === "3.Run" ){
      console.log(`You run away from ${enemy}`);
      continue Game;
    }
  }    
  if(heroHealth < 1){
   console.log(`You are out from battle. you are too weak.`);
   break   
  }

  console.log(`${enemy} was defeated!`);
  console.log(`you have ${heroHealth} health`);

  let randomNumber =  Math.floor(Math.random() * 100 + 1)
  if(randomNumber < HealthPotionDropChance){
    numHealthPotion++

    console.log(`enemy give you health potion`);
    console.log(`your health is${heroHealth}`);
    console.log(`your health potiob is ${numHealthPotion}`);
  }
  let userOption = await inquirer.prompt ({
    name:"ans",
    type:"list",
    message:"what would you lke to do now",
    choices:["1.Continue" , "2.Exit"]
  })
  if(userOption.ans ===  "1.Continue"){
    console.log("you are continue on your advanture");

  }else{
    console.log("you success fully exit from deadZone!");
    break;
  }
}
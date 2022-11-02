// A "Class" in JavaScript is a blueprint for creating objects that have the same properties and access to the same methods

// Every object that I create with a Class will be able to run any methods that i define on that class

// Classes are "syntactic sugar" on top of setting up your constructor functions and a prototype chain manually

// in React specifically, we will see something called
// "Class fields" which is a way in a Class to initialise every object that gets created from that Class with the same value


// If you will always initialize an instance with a hard-coded
// value, you can declare that without a constructor
// alive = true

// If you want to initialise a Class with a dynamic value then you will need to use the constructor method inside that class, so that when i create a new instance of that Class i can provide a value for the property that i want to create;
// all it does is add a new property to my object (called hp) and defaults that value to my initial value (initialHp)

// If you need to initialize values when creating the 
// object, you must include a constructor
// constructor(initialHp=100) {
//   this.hp = initialHp
// }

// You can extend from one Class to another Class, which allows your new Class or child Class to access all of the goodness that comes from the Parent Classes.
// More specifically in terms of React it allows our Extended Class (or Child Class) to access all of the methods from the parent class that it is extending.

// Our Parent Class (Character) we have a method called updateHp
// We then have two Extended Classes (Child Classes) (Enemy) and (Hero)
// Each have their own specific properties and methods, but because we are extending Character
// Any object that we create with either the Enemy Class or the Hero Class will have access to the updateHp method which is defined in the Character Class (Parent Class)


// EXAMPLE CODE:

class Character {
  // If you need to initialize values when creating the 
  // object, you must include a constructor
  constructor(initialHp=100) {
      this.hp = initialHp
  }
  
  // If you will always initialize an instance with a hard-coded
  // value, you can declare that without a constructor
  alive = true
  
  // I can refer to the object calling this method as `this`
  // and therefore can access and update the properties of
  // this object with, e.g.: `this.hp = ...`
  updateHp(amount) {
      const calc = this.hp + amount
      if (calc <= 0) {
          // Trying to avoid any character 
          // having a negative amount of HP
          this.hp = 0
          this.alive = false
      } else {
          this.hp = calc
      }
  }
}


// const char = new Character()
// console.log(char.hp)
// char.updateHp(100)
// console.log(char.hp)


class Enemy extends Character {
  constructor(hp, lootToDrop) {
      super(hp)
      this.lootToDrop = lootToDrop
  }
}

class Hero extends Character {
  constructor(hp) {
      super(hp)
  }
  inventory = []
  
  defeatEnemy(enemy) {
      if(enemy.lootToDrop) {
          this.inventory.push(enemy.lootToDrop)
      }
      enemy.updateHp(enemy.hp * -1)
  }
}


const enemy = new Enemy(100, "Sword of a Thousand Truths")
const me = new Hero(100)

console.log(me.hp)
// 100
console.log(me.alive)
// true
me.updateHp(50)
console.log(me.hp)
// 150

me.defeatEnemy(enemy)
console.log("My inventory:", me.inventory)
// My inventory: [ 'Sword of a Thousand Truths' ]
console.log("Enemy's HP:", enemy.hp)
// Enemy's HP: 0
console.log("enemy.alive:", enemy.alive)
// enemy.alive: false
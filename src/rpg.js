import {items} from './../src/world-inventory.js';

export class Character {
  constructor(name, level, exp, job, inventory, money) {
    this.name = name;
    this.level = level;
    this.exp = exp;
    this.job = job;
    this.inventory = inventory;
    this.money = money;
  }
}

// You could have a Character class with a Job property (that could have job, inventory, money as an object)
// You have two classes, the Job class allows you to modularly build these jobs separately from the Character class.
// You can combine the two above methods - have a property in Characer that is an object containing properties that are constructed by the Job class.
// Character { 
// ... (same properties)
// this.job = {job: value, inventory: value, money: value}
// }

export class Job {
  constructor(job, inventory, money) {
    this.job = job;
    this.inventory = inventory;
    this.money = money;
  }
}

export class Merchant {
  constructor(name, inventory) {
    this.name = name;
    this.inventory = inventory;
  }

  viewGoods() {
    for (let w=0; w<items.length; w++) {
      for (let m=0; m<this.inventory.length; m++) {
        if(items[w].item === this.inventory[m]) {
          return items[w].price;
        }
      }
    }
  }
}


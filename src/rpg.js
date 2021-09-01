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

  viewSellPrice() {
    for (let w=0; w<items.length; w++) {
      for (let u=0; u<this.inventory.length; u++) {
        if(items[w].item === this.inventory[u]) {
          return Math.floor(items[u].price * 0.8);
        }
      }
    }
  }
}

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

  viewPrice() {
    for (let w=0; w<items.length; w++) {
      for (let m=0; m<this.inventory.length; m++) {
        if(items[w].item === this.inventory[m]) {
          return items[w].price;
        }
      }
    }
  }
}


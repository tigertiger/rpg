import {items} from './../src/world-inventory.js';

export class Character {
  constructor(name, level, exp, job, inventory, money, attack, defense, hp) {
    this.name = name;
    this.level = level;
    this.exp = exp;
    this.job = job;
    this.inventory = inventory;
    this.money = money;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
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
  
  assignJobGoon(){
    this.job = "goon";
    this.attack = 5;
    this.defense = 30;
    this.hp = 100;
  }

  sellItem(selected) {
    let index = this.inventory.indexOf(selected);
    this.inventory.splice(index,1);
    for (let w=0; w<items.length; w++){
      if (selected === items[w].item){
        return this.money += Math.floor(items[w].price * 0.8);
      }
    }
  }

  buyItem(selected) {
    this.inventory.push(selected);
    for (let w=0; w<items.length; w++){
      if (selected === items[w].item){
        return this.money -= items[w].price;
      }
    }
  }
  attackRoll() {
    let damage = dice6();
    let totalDamage = damage + this.attack;
    return totalDamage;
  }

  defend(attackDamage) {
    let finalDamage = attackDamage - this.defense;
    return finalDamage;
  }
  
  healthLoss(finalDamage) {
    this.hp -= finalDamage;
    if (this.hp <= 0) {
      return "You dead."
    } else {
      return this.hp;
    }
  }

}

export class Job {
  constructor(job, inventory, money, attack, defense, hp) {
    this.job = job;
    this.inventory = inventory;
    this.money = money;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
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

export function dice6() {
  let number = Math.floor((Math.random() * 6) + 1);
  return number;
}


import {Character, Job, Merchant, dice6, attackRoll} from './../src/rpg.js';
import {goon} from './../src/jobs.js';
import {otik} from './../src/npcs.js';
import {items} from './../src/world-inventory.js';

describe('Character', () => {
  let player;
  let player2;
  beforeEach(() => {
    player = new Character("That Guy", 1, 0, "Civilian", ["sack lunch", "mega gulp"], 0);
    player2 = new Character("Jerry", 1, 0, goon.job, goon.inventory, goon.money, goon.attack, goon.defense, goon.hp)
  });

  test('should build a character with the Character traits chosen by the user', () => {
    expect(player.name).toEqual("That Guy");
    expect(player.level).toEqual(1);
    expect(player.exp).toEqual(0);
    expect(player.job).toEqual("Civilian");
    expect(player.inventory).toEqual(["sack lunch", "mega gulp"]);
    expect(player.money).toEqual(0);
  });

  test('should add correct starting values based on chosen job [goon]', () => {
    expect(player2.job).toEqual("Goon");
    expect(player2.inventory).toEqual(["hockey stick", "skates", "mega gulp"]);
    expect(player2.money).toEqual(10);
  });

  
  test('should add correct starting values based on chosen job [goon]', () => {
    expect(player2.attack).toEqual(1);
    expect(player2.defense).toEqual(2);
    expect(player2.hp).toEqual(20);
  });
  
  test("should correctly display the sell price of user items", () => {
    expect(player.viewSellPrice()).toEqual(4,4);
  });
  
  test("should add money & remove a selected item to/from player inventory", () => {
    let selected = "mega gulp";
    player.sellItem(selected);
    expect(player.inventory).toEqual(["sack lunch"]);
    expect(player.money).toEqual(4);
  });
  
  test('should subtract money from player.money and add item to player inventory', () => {
    let player3 = new Character("Rich Guy", 1, 0, "CTO", ["rolex", "mega gulp"], 1501);
    let selected = "lobster bisque for one";
    player3.buyItem(selected);
    expect(player3.money).toEqual(1);
    expect(player3.inventory).toEqual(["rolex", "mega gulp", "lobster bisque for one"]);
  });

  test('should add the player attack modifier to the attackRoll', () =>  {
    expect(player2.attackRoll()).toBeGreaterThanOrEqual(2);
    expect(player2.attackRoll()).toBeLessThanOrEqual(7);
  });

  test("should subtract player defense modifier from totalDamage & return finalDamage", () => {
    let attackDamage = 4;
    expect(player2.defend(attackDamage)).toEqual(2);
  });

  test("should subtract finalDamage from player HP", () => {
    let finalDamage = 4;
    player2.healthLoss(finalDamage);
    expect(player2.hp).toEqual(16);
  });

  test("should return a death message if player HP is 0 or less", () => {
    let finalDamage = 20;
    expect(player2.healthLoss(finalDamage)).toBe("You dead.");
    expect(player2.hp).toEqual(0);
  });

  test('should add dead characters exp to live characters exp', () => {
    let steve = new Character("Steve", 1, 50, pencilPusher.job, pencilPusher.inventory, pencilPusher.money, pencilPusher.attack, pencilPusher.defense, pencilPusher.hp);
    let finalDamage = 10;
    steve.healthLoss(finalDamage);
    expect(player2.exp).toEqual(50);
  });
});

describe('Merchant', () => {
  test('should be able to see OT-IKs inventory', () => {
    expect(otik.inventory).toEqual(["soup for your family"]);
  });
  
  test("should correctly display the buy price of items", () => {
    expect(otik.viewPrice()).toEqual(10);
  });

});

describe('dice6', () => {
  test('should generate an attack of one dice roll', () => {
    expect(dice6()).toBeGreaterThanOrEqual(1);
    expect(dice6()).toBeLessThanOrEqual(6);
  });
});
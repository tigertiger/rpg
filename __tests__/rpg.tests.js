import {Character, Job, Merchant} from './../src/rpg.js';
import {goon} from './../src/jobs.js';
import {otik} from './../src/npcs.js';
import {items} from './../src/world-inventory.js';

describe('Character', () => {
  let player;
  beforeEach(() => {
    player = new Character("That Guy", 1, 0, "Civilian", ["sack lunch", "mega gulp"], 0);
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
    let player2 = new Character("Jerry", 1, 0, goon.job, goon.inventory, goon.money);
    expect(player2.job).toEqual("Goon");
    expect(player2.inventory).toEqual(["hockey stick", "skates", "mega gulp"]);
    expect(player2.money).toEqual(10);
  });

  // test('should generate an attack of one dice roll'), () => {
  //   expect(player.attackRoll ()).isGreaterThanOrEqualTo(1);
  //   expect(player.attackRoll ()).isLessThanOrEqualTo(6);
  // });

  test('should add correct starting values based on chosen job [goon]', () => {
    let player2 = new Character("Jerry", 1, 0, goon.job, goon.inventory, goon.money, goon.attack, goon.defense, goon.hp);
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
});

describe('Merchant', () => {
  test('should be able to see OT-IKs inventory', () => {
    expect(otik.inventory).toEqual(["soup for your family"]);
  });

  test("should correctly display the buy price of items", () => {
    expect(otik.viewPrice()).toEqual(10);
  });
});
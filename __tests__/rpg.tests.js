import {Character, Job, Merchant} from './../src/rpg.js';
import {goon} from './../src/jobs.js';
import {otik} from './../src/npcs.js';
import {items} from './../src/world-inventory.js';

describe('Character', () => {
  let player;
  beforeEach(() => {
    player = new Character("That Guy", 1, 0, "Civilian", ["sack lunch"], 0);
  });

  test('should build a character with the Character traits chosen by the user', () => {
    expect(player.name).toEqual("That Guy");
    expect(player.level).toEqual(1);
    expect(player.exp).toEqual(0);
    expect(player.job).toEqual("Civilian");
    expect(player.inventory).toEqual(["sack lunch"]);
    expect(player.money).toEqual(0);
  });

  test('should add correct starting values based on chosen job [goon]', () => {
    let player2 = new Character("Jerry", 1, 0, goon.job, goon.inventory, goon.money);
    expect(player2.job).toEqual("Goon");
    expect(player2.inventory).toEqual(["hockey stick", "skates", "mega gulp"]);
    expect(player2.money).toEqual(10);
  });

});

describe('Merchant', () => {
  test('should be able to see OT-IKs inventory', () => {
    expect(otik.inventory).toEqual(["soup for your family"]);
  });

  test("should correctly display the buy price of items", () => {
    expect(otik.viewGoods()).toEqual(10);
  });

});

// A property can be unpacked from an object and assigned to a variable with a different name than the object property.

// const o = {p: 42, q: true};
// const {p: foo, q: bar} = o;

// console.log(foo); // 42
// console.log(bar); // true
// Copy to Clipboard
// Here, for example, const {p: foo} = o takes from the object o the property named p and assigns it to a local variable named foo.
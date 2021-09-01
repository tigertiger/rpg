import {Character, Job} from './../src/rpg.js';
import {goon} from './../src/jobs.js';

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
    expect(player2.inventory).toEqual(["hockey stick", "skates", "Mega Gulp"]);
    expect(player2.money).toEqual(10);
  });

});
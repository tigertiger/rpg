import {Character} from './../src/rpg.js';

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
  })
});
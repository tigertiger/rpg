# _RPG!_

#### _A very good, fun, cool RPG [a work-in-progress]_

#### By _**Chynna Lew, Melissa Schatz-Miller, Scott Hutley**_

## Technologies Used

* _JS_

## Description

_A near-future space opera RPG_

## Known Bugs

* _None at the moment_

## License

_[GPL](https://opensource.org/licenses/gpl-license)_
_Copyright (c) 2021, Chynna Lew, Melissa Schatz-Miller, Scott Hutley_

## Contact Information

Chynna Lew <chynnalew@yahoo.com>
Melissa Schatz-Miller <melissa.scmi@gmail.com>
Scott Hutley <scotthutley1@comcast.net>

Please feel free to reach out to us with suggested changes/improvements, or if you have any questions.

////////

function encounter(ranNumber) {
let ranNumber = Math.floor((Math.random() *20) + 1);
 if (ranNumber <= 5) {
return "Low Level Pencil Pusher";
} else if (ranNumber >=6 && ranNumber <= 10) {
return "Code Monkey";
} else if (ranNumber >= 11 && ranNumber <= 16) {
return "Try-Hard Patrick Bateman-type";
} else if (ranNumber = 17) {
return "Darth Gates";
} else if (ranNumber = 18) {
return "Boba Branson";
} else if (ranNumber = 19) {
return "Mark Zuckussberg";
} else if (ranNumber = 20) {
return "Geoffrey Bezos"
}

how do you attack
how do you loot
how do you die

///

What is our excellent THEME??: Near Future Space Opera [VS Billionaires]
space miners, 

- character constructor [this is for characters & enemies]
-- name
-- level
---- exp
-- job [attack, defense, hp, starting gold]
JOBLIST:
-- goon
--- hockey stick, skates, mega gulp
--- 10 dogecoin
-- IT guy
-- sanitation technician
-- soda jerk [stowaway]
-- crust punk [stowaway]
-- lumberjack [stowaway]
<!-- -- mercenery
-- trader
-- spaaaace wizard
-- contract worker
-- mechanic
-- miner
-- accountant
-- influencer/youtuber
-- developer
-- chef
-- custodian -->



<!-- -- race -->
<!-- -- hp -->
<!-- -- stats -->
<!-- -- attack
-- defense -->
<!-- ** held items/weapons [wait on this, cause it's going to be hard] -->
-- inventory {}
<!-- -- MONEY GOLD PIECES! Platinum! Riches. Treasure. -->

merchant/inn keeper constructor
-- inventory {}
-- buy/sell prototype
<!-- -- dialogue -->

Character.prototype.fight 
if character 1 attack roll > character 2 defense roll
then character 1 does x damage
at what point does one win?

Character.prototype.exp
then how much exp is granted?
how much exp does it take to lvl?

Character.prototype.loot
defeated character inventory moves to player character's inventory [buttons to take, instead of auto-giving]

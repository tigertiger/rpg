
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



# _RPG!_

#### _{Brief description of application}_

#### By _**Chynna Lew, Melissa Schatz-Miller, Scott Hutley**_

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

_{This is a detailed description of your application. Give as much detail as needed to explain what the application does as well as any other information you want users or other developers to have.}_

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

* _Clone [this repository](https://github.com/tigertiger/REPONAME) to an empty folder or to your desktop.  
Instructions for cloning can be found [here](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository-from-github/cloning-a-repository)._
* _Navigate to the top level of the REPONAME directory_
* _Open index.html in your browser_
* _You can also access the live site at [https://tigertiger.github.io/REPONAME](https://tigertiger.github.io/REPONAME/)_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _Any known issues_
* _should go here_

## License

_[GPL](https://opensource.org/licenses/gpl-license)_
_Copyright (c) 2021, Melissa Schatz-Miller_

_{Let people know what to do if they run into any issues or have questions, ideas or concerns.  Encourage them to contact you or make a contribution to the code.}_

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
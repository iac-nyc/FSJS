/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

// your code goes here
function hasEnoughPlayers(arr) {
    if (arr.length >= 7) {
        return true;
    }
    return false;
}


var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

console.log(hasEnoughPlayers(team));

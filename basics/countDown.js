/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

// your code goes here
var x = 60;
while(x >=1){
    console.log("T - " + x +" seconds");
    x--;
    if(x===50){
        console.log("Orbiter transfers from ground to internal power");
	x--;
    }
    if(x===0){
        console.log("Solid rocket booster ignition and liftoff!");
    }
}
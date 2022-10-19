let cones =15;
let berries ="15";
let name ="Bena";

/**
 * SYNTAX
 * If(condition){ executed when the condition is met
 * }
 * else{executed when the condition is not met}
 */
 
if(cones!=15){
    console.log ("10 cones of ice cream");
}

else{
    console.log ("not 10 cones of ice cream");
}

if(berries=== cones){
    console.log ("condition has been met");
}

else{
    console.log ("condition has not been met");
}

if(weight < 0){
    console.log ("you are weightless");
}

else if(weight > 5){
    console.log ("you have some weight");
}

else if(weight > 0 && weight <=5){
    console.log("you are in the range of 0 to 5");
}

else if(weight > 30 && weight <55){
    console.log("you are in the range of 30 to 55");
}

else {
    console.log ("you are really heavy");
}

/**
 * description
 * implement an elevator
 */

let level = 100 ;

if (level==3){
    console.log("the elevator is atleevel 3, its coming for you")
}
if (level==2){
    console.log("the elevator is at level 2, its coming for you")
}
else {
    console.log('the elevator is at level 1, and its open to you')
}

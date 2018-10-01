/*
Generators are a powerful new kind of function that is able to pause its execution while also maintaining its own state. 
Generators are great for iterating over a list of items one at a time so you can handle each item on its own before moving on to the next one. 
You can also use generators to handle nested callbacks. 
*/


function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;
    }

    console.log('the function has ended');
}
const generatorIterator = getEmployee();
let result = generatorIterator.next();
result.value
// the function has started
// "Amanda"

generatorIterator.next().value 
// "Diego"
generatorIterator.next().value
//  "Farrin"




/****************************
******************************/
function* getEmployee() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Iftekhar'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name); 
    }

    return facts;
}

const generatorIterator = getEmployee();

// get the first name out of the generator
let name = generatorIterator.next().value;

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is cool!`).value; 

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is awesome!`).value; 

// pass data in *and* get the next name
name = generatorIterator.next(`${name} is stupendous!`).value; 

// you get the idea
name = generatorIterator.next(`${name} is rad!`).value; 
name = generatorIterator.next(`${name} is impressive!`).value;
name = generatorIterator.next(`${name} is stunning!`).value;
name = generatorIterator.next(`${name} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIterator.next(`${name} is magnificent!`).value; 

// displays each name with description on its own line
positions.join('\n'); 
/*
"Amanda is cool!
Diego is awesome!
Farrin is stupendous!
James is rad!
Kagure is impressive!
Kavita is stunning!
Orit is awe-inspiring!
Iftekhar is magnificent!"
*/
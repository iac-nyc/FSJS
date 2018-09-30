/*
    A proxy object sits between a real object and the calling code. The calling code interacts with the proxy instead of the real object.

   >  use the new Proxy() constructor
   >  pass the object being proxied as the first item
   >  the second object is a handler object
   >  the handler object is made up of 1 of 13 different "traps"
   >  a trap is a function that will intercept calls to properties let you run code
   >  if a trap is not defined, the default behavior is sent to the target object


    The proxy constructor takes two items:

    the object that it will be the proxy for
    an object containing the list of methods it will handle for the proxied object
    The second object is called the handler.

*/
let richard = {status: 'looking for work'};
let agent = new Proxy(richard, {});

agent.status; // returns 'looking for work'


/*
Get Trap
The get trap is used to "intercept" calls to propertie
*/

const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);
agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)



/*****************
Having the proxy return info, directly
************/


const richard = {status: 'looking for work'};
const handler = {
    set(target, propName, value) {
        if (propName === 'payRate') { // if the pay is being set, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;
    }
};
const agent = new Proxy(richard, handler);
agent.payRate = 1000; // set the actor's pay to $1,000
agent.payRate; // $850 the actor's actual pay


/*******************
Other traps
***********************
the get trap - lets the proxy handle calls to property access
the set trap - lets the proxy handle setting the property to a new value
the apply trap - lets the proxy handle being invoked (the object being proxied is a function)
the has trap - lets the proxy handle the using in operator
the deleteProperty trap - lets the proxy handle if a property is deleted
the ownKeys trap - lets the proxy handle when all keys are requested
the construct trap - lets the proxy handle when the proxy is used with the new keyword as a constructor
the defineProperty trap - lets the proxy handle when defineProperty is used to create a new property on the object
the getOwnPropertyDescriptor trap - lets the proxy handle getting the property's descriptors
the preventExtenions trap - lets the proxy handle calls to Object.preventExtensions() on the proxy object
the isExtensible trap - lets the proxy handle calls to Object.isExtensible on the proxy object
the getPrototypeOf trap - lets the proxy handle calls to Object.getPrototypeOf on the proxy object
the setPrototypeOf trap - lets the proxy handle calls to Object.setPrototypeOf on the proxy object


***************/


const proxyObj = new Proxy({age: 5, height: 4}, {
    get(targetObj, property) {
        console.log(`getting the ${property} property`);
        console.log(targetObj[property]);
    }
});

proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4
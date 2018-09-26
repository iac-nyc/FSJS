/*
SET - an object that allows to store unique items.

- Sets are not indexed-based - you do not refer to items in a set based on their position in the set
- items in a Set can’t be accessed individually
- to delete all the items from a Set, you can use the .clear() method.
   
   ``` 
    games.clear()
    console.log(games);
    Set {}
    
    ```
    */


/*
const games = new Set();
console.log(games);
Set {}

Example:

{1,'Basketball', true, false, '1'}
{}
{'Gymnastics','Swimming', 2}


TIP: If you attempt to .add() a duplicate item to a Set, you won’t receive an error, but the item will not be added to the Set. Also, if you try to .delete() an item that is not in a Set, you won’t receive an error, and the Set will remain unchanged.

.add() returns the Set if an item is successfully added. On the other hand, .delete() returns a Boolean (true or false) depending on successful deletion.

*/



const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);
//Set(4) {"Banjo-Kazooie", "Mario Kart", "Banjo-Tooie", "Age of Empires"}
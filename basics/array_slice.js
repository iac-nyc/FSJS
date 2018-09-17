/* splice allows to add or remove elements from anywhere within an Array.
Syntax
array.splice(index, howmany, item1, ....., itemX)

Parameter	Description
index	    Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
howmany	    Optional. The number of items to be removed. If set to 0, no items will be removed
item1, ..., itemX	Optional. The new item(s) to be added to the array
*/



var donuts = ["glazed", "chocolate frosted", "Boston creme", "glazed cruller"];
donuts.splice(1, 1, "chocolate cruller", "creme de leche"); // removes "chocolate frosted" at index 1 and adds "chocolate cruller" and "creme de leche" starting at index 1
// ["chocolate frosted"]
console.log(donuts);
//(5) ["glazed", "chocolate cruller", "creme de leche", "Boston creme", "glazed cruller"]




var donuts2 = ["cookies", "cinnamon sugar", "creme de leche"];
donuts.splice(-2, 0, "chocolate frosted", "glazed");
console.log(donuts2);
//(5) ["cookies", "chocolate frosted", "glazed", "cinnamon sugar", "creme de leche"]
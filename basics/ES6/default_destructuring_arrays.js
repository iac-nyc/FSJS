/*
    Default Destructuring Array 
*/

function createGrid([width = 5, height = 5]) {
  return `Generates a ${width} x ${height} grid`;
}

createGrid([]); // Generates a 5 x 5 grid
createGrid([2]); // Generates a 2 x 5 grid
createGrid([2, 3]); // Generates a 2 x 3 grid
createGrid([undefined, 3]); // Generates a 5 x 3 grid








function houseDescriptor([houseColor = 'green', shutterColors = ['red']]) {
  return `I have a ${houseColor} house with ${shutterColors.join(' and ')} shutters`;
}

houseDescriptor(['green', ['white', 'gray', 'pink']]);
houseDescriptor(['green']);


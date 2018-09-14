const myString = {
    string: "Iftekhar Ahmad Chowdhury",
    countWords: function (){
        const wordArray = this.string.split(' ');
        return wordArray.length;
    }
}

console.log(myString.string.split(' '));

const numWords = myString.countWords();
console.log(numWords);

myString.characters = myString.string.length;

console.log(myString.characters);
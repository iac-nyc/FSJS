var expect = require('chai').expect;
//var chai = require(‘chai’);
//var expect = chai.expect;

expect(true).to.be.true;

function titleCase (title) {
  var words = title.split(' ');
  var titleCaseWords = words.map(function(word) {
  	return word[0].toUpperCase() + word.substring(1);
  
  });
  return titleCaseWords.join(' ');
  

}

expect(titleCase('the great mouse detective')).to.be.a('string');


expect(titleCase('a')).to.equal('A');



expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');
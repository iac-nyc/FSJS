function isPrime(number){
	if (number <=1){
		return false;
    }
var idx=2;
while(idx < number){
	if(number % idx === 0){
	 return false;

		}
	idx +=1;

	}
	return true;

}
console.log(isPrime(13));
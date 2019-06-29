// multiplying two integers without using *


function multiply(a,b){
	if(b===0){
		return 0;
	}else if(b > 0){
		return(a+multiply(a, b-1));
	}else if(b < 0){
		return -multiply(a,-b);
	}
	return -1;

}

multiply(5,5); // output: 25
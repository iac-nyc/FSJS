/*
** Flags:
        i - case-insensitive
        g - global
        m - multiline
        
        /regex/igm
***      
*/


'LION'.replace(/lion/i,'Tiger');    //Tiger

'LION'.replace(/[a-z]+/i,'Tiger');  //Tiger


'She ate my watermelon at waterpark'.replace(/water/,'');
//"She ate my melon at waterpark"

// g flag

'She ate my watermelon at waterpark'.replace(/water/g,'');
//"She ate my melon at park"



const treat = `Cheese
Cheese
Cheese`;
treat.replace(/^Cheese$/m, 'Fruits');
/* "Fruits
Cheese
Cheese" */

treat.replace(/^Cheese$/mg, 'Fruits');
/* "Fruits
Fruits
Fruits" */
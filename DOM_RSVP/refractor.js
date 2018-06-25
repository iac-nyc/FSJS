/*
Name: Iftekhar A Chowdhury
Date: June 10, 2018
version: 1.0.1;
*/

// To avoid the script loading before the page or after the page
document.addEventListener('DOMContentLoaded', () =>{

const form = document.getElementById('registrar');
const input = document.querySelector('input');

const mainDiv = document.querySelector('.main');
const ul = document.getElementById('invitedList');

const div = document.createElement('div');
const filterLabel = document.createElement('label');
const filterCheckBox = document.createElement('input');


filterLabel.textContent="Hide those who haven't responded";

filterCheckBox.type = 'checkbox';
div.appendChild(filterLabel);
div.appendChild(filterCheckBox);
mainDiv.insertBefore(div,ul);

filterCheckBox.addEventListener('change', (e) =>{

  const isChecked = e.target.checked;
  const lis = ul.children;
  
  if(isChecked){
    for(let i=0;i<lis.length; i++){
      let li = lis[i];  
      
           if(li.className ==='responded'){
           
            li.style.display = '';
           
           }else{
            li.style.display = 'none';
           }
    
    }
   
  
  }else{
  
    for(let i=0; i<lis.length; i++){
    
      let li = lis[i];
      li.style.display ='';
    
    }
  }

});


function creatLi(text){
  
 
  
  /* 
  //li.textContent = text;
  
  This lines of code are replaced by 
  createElement function
  
  //Creating the name as an html element
  
  const span = document.createElement('span');
  span.textContent = text;
  
 
  const label = document.createElement('label');
  label.textContent='Confirmed';
  
  
  
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  

  
   const editButton = document.createElement('button');
   editButton.textContent= 'Edit';
  

  
    const removeButton = document.createElement('button');
    removeButton.textContent= 'Remove';
    
    
    
    
     // const span = createElement('span','textContent',text);  //function call
   // li.appendChild(span);
   
  
  
   // const label = createElement('label','textContent','Confirmed');
 
    //const checkbox = createElement('input','type','checkbox');
  //const label = appendToLI('label','textContent','Confirmed');
  //const checkbox = appendToLI('input','type','checkbox');
  
   // label.appendChild(checkbox);
   // li.appendChild(label); 
  
 
    //const editButton = createElement('button','textContent','Edit');//function call
    //li.appendChild(editButton);
  
  
    //const removeButton =createElement('button','textContent','Remove');//function call
    //li.appendChild(removeButton);
  
    
  
  */
         function createElement(elementName,property,value){
           const element = document.createElement(elementName);
           element[property] = value;
           return element;
        }
      
        function appendToLI(elementName, property, value){        
           const element= createElement(elementName, property, value); 
           li.appendChild(element);
          return element;
        
        }
  
    const li = document.createElement('li');
    appendToLI('span','textContent',text);
    appendToLI('label','textContent','Confirmed')
        .appendChild(createElement('input','type','checkbox'));
    appendToLI('button','textContent','Edit');
    appendToLI('button','textContent','Remove');
  
  
 return li;


}



form.addEventListener('submit', (e) =>{
  e.preventDefault();
  const text = input.value;
  input.value = '';
  
  const li = creatLi(text);
  
  ul.appendChild(li);

});

ul.addEventListener('change', (e) =>{
  //console.log(e.target.checked);
  const checkbox = event.target;
  const checked = checkbox.checked;
  const listItem = checkbox.parentNode.parentNode;
  
  if(checked){
    listItem.className = 'responded';
  }else{
    listItem.className = '';
  }


});


ul.addEventListener('click', (e) =>{
  
  if(e.target.tagName === 'BUTTON'){
    const btn = e.target;
    const li = btn.parentNode;
    const ul = li.parentNode;
     const action = btn.textContent;
    // creating an object
    const nameActions = {
      
      remove: () =>{
                ul.removeChild(li);
               },
          
       edit:() =>{
             const span = li.firstElementChild;
             const input = document.createElement('input'); 
            
            input.type = 'text';
            input.value = span.textContent;
            li.insertBefore(input,span);
            li.removeChild(span);
            btn.textContent = 'Save';
         }
    
    ,
      save: () =>{
            const input = li.firstElementChild;
            const span = document.createElement('span'); 
            span.textContent = input.value ;
            li.insertBefore(span,input);
            li.removeChild(input);
            btn.textContent = 'Edit';
          
          }
      
      };
    
   
   
 // select and run action in button's name
  nameActions[action]();
    
//    if(action ==='Remove'){       
//       // removeName();
//      nameActions.remove();
//      
//    }else if(action ==='Edit'){
//        //editName();
//      nameActions.edit();
//     
//    }else if(action ==='Save'){
//       // saveName();   
//      nameActions.save();
//      
//    }
      
   
  }

});
});
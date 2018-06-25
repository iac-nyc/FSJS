// To avoid the script loading before the page or after the page
document.addEventListener('DOMContentLoaded', () => {   


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

    
//event to see the confirmed
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

});//end event to see the confirmed


function creatLi(text){
  const li = document.createElement('li');
  //li.textContent = text;
  
  //Creating the name as an html element
  const span = document.createElement('span');
  span.textContent = text;
  li.appendChild(span);
  
  const label = document.createElement('label');
  label.textContent='Confirmed';
  
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  
  label.appendChild(checkbox);
  li.appendChild(label); 
  
   const editButton = document.createElement('button');
   editButton.textContent= 'Edit';
   li.appendChild(editButton);
  
    const removeButton = document.createElement('button');
    removeButton.textContent= 'Remove';
    li.appendChild(removeButton);
  
 
  

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

//// Button click event for Edit or Save
ul.addEventListener('click', (e) =>{
  if(e.target.tagName === 'BUTTON'){
    const btn = e.target;
    const li = btn.parentNode;
    const ul = li.parentNode;
   
    
    if(btn.textContent ==='Remove'){
        ul.removeChild(li);
      
    }else if(btn.textContent ==='Edit'){
       const span = li.firstElementChild;
       const input = document.createElement('input'); 
      
      input.type = 'text';
      input.value = span.textContent;
      li.insertBefore(input,span);
      li.removeChild(span);
      btn.textContent = 'Save';
    }else if(btn.textContent ==='Save'){
       const input = li.firstElementChild;
       const span = document.createElement('span'); 
       span.textContent = input.value ;
      li.insertBefore(span,input);
      li.removeChild(input);
      btn.textContent = 'Edit';
      
    }
      
   
  }

}); // Button click event ends here for edit or save
    
 }); //DOMContentLoaded event ends here
    
    
    
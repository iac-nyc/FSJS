const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');

const newList = listUl.children;

const descriptionInput =document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton =document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton= document.querySelector('button.addItemButton');
const removeItemButton= document.querySelector('button.removeItemButton');

const firstListItem = listUl.firstElementChild;
const lastListItem = listUl.lastElementChild;

firstListItem.style.backgroundColor = 'lightskyblue';
lastListItem.style.backgroundColor ='lightsteelblue';





//Getting all Children of a Node with Children
function attachListItemButton(li){
    
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);
    
    
    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);
    
    
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
    
}
for (let i=0; i<newList.length;i++){
    attachListItemButton(newList[i]);
}


//Traversing


listUl.addEventListener('click', (event) =>{
    if(event.target.tagName ==='BUTTON'){
        if(event.target.className==="remove"){
          let li= event.target.parentNode;
          let ul = li.parentNode;
          ul.removeChild(li);
        }
        if(event.target.className==="up"){
          let li= event.target.parentNode;
          let prevLi = li.previousElementSibling;
          let ul = li.parentNode;
            if(prevLi){
            ul.insertBefore(li,prevLi);
                }
          
        }
        if(event.target.className==="down"){
          let li = event.target.parentNode;
          let nextLi = li.nextElementSibling;
          let ul = li.parentNode;
            if(nextLi){
                ul.insertBefore(nextLi,li);
            }
            
            
            
        }
        
    }

});
          /*  

// event Bubbling

listDiv.addEventListener('mouseover', (event)=>{
    if( event.target.tagName==='LI'){
         event.target.textContent =  event.target.textContent.toUpperCase();
        
    }

             
});
    
listDiv.addEventListener('mouseout', (event)=>{
     if( event.target.tagName==='LI'){
                event.target.textContent =  event.target.textContent.toLowerCase();
     }
});

        */


/*
adding eventS
const listItems = document.getElementsByTagName('li');


for( let i=0;i<listItems.length;i++){
    
            listItems[i].addEventListener('mouseover', ()=>{

                listItems[i].textContent = listItems[i].textContent.toUpperCase();
            })
    
            listItems[i].addEventListener('mouseout', ()=>{

                listItems[i].textContent = listItems[i].textContent.toLowerCase();
            })

}

*/


toggleList.addEventListener('click', () =>{
    if(listDiv.style.display === 'none'){
        toggleList.textContent = 'Hide List';
        listDiv.style.display='block';
        }else{
        toggleList.textContent = 'Show List';
        listDiv.style.display = 'none';
         }
    
});

//add.addEventListener('click', () =>{
descriptionButton.addEventListener('click', () =>{
                       // p.textContent = input.value + " :";
                   descriptionP.innerHTML = descriptionInput.value + " :";
                   descriptionInput.value='';// clear the input box
                        
                        
                        });



/* Can replace the whole ul list 
let ul= document.querySelector('ul');

ul.innerHTML = "<li> James Bond movie list</li>";




//Creating a New DOM Element
addItemButton.addEventListener('click', () =>{
        let ul = document.getElementsByTagName('ul')[0];// get the element to insert in the DOM
        let li =document.createElement('li');
        li.textContent= addItemInput.value;

        ul.appendChild(li);// This will insert the item
        addItemInput.value='';// This will clear the input box automatically
        addItemInput.focus();
                               
                               });

removeItemButton.addEventListener('click', () =>{
        let ul = document.getElementsByTagName('ul')[0];// get the element to insert in the DOM
        let li =document.querySelector('li:last-child');
        

        ul.removeChild(li);// This will remove the item
       
                               
                               });
                               
                               
                               */
addItemButton.addEventListener('click', () =>{
        let ul = document.getElementsByTagName('ul')[0];// get the element to insert in the DOM
        let li = document.createElement('li');
        li.textContent= addItemInput.value;
        
        attachListItemButton(li); // Calling the reated function

        ul.appendChild(li);// This will insert the item
        addItemInput.value='';// This will clear the input box automatically
        addItemInput.focus();
                               
                               });


/*
Author: Iftekhar Ahmad Chowdhury

*/
const $odd = $('a:odd');
const $a=$('a');
const $pdfs = $('a[href$=".pdf"]'); 
const $secureLinks = $('a[href^="https://"]');
const $pdfCheckbox = $("<label><input type='checkbox'> Allow PDF downloads</label>");
//$secureLinks.fadeOut(3000);
//$odd.fadeOut(2000);



//$pdfs.fadeOut(4000);
$a.attr('target','_blank');
$pdfs.attr('download',true);
//css selector
$odd.css('backgroundColor','#a9b8f9');
//jQuery selector
$secureLinks.addClass('secure');
//$a.addClass('secure');
$pdfs.addClass('pdf');

$pdfs.on('click', function(event){
    
    
    // check if checkbox has been checked
    //if zero checkboxes are 
   if($(':checked').length === 0){
    // prevent the download and alert user
    //else allow download
        event.preventDefault();
        alert("You need to select the 'Allow PDF downloads' checkbox");
      
       }
    
});

  $('#links').append($pdfCheckbox);
  $('a').each(function(index,element){
    console.log(index,$(element).attr('href'));
    
})

$('a').each(function(index,link){
    const urlText = $(link).attr('href');
    $(link).parent().append(`=>>URL::${urlText}<<`);//using template literal
  
    
    
});
$('a').css('fontSize', '1.5em');
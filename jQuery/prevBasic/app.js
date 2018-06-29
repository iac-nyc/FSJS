//const box = document.querySelector('.box');
//box.style.display = 'none';
//box.addEventListener('click', (e)=>{
//    
//    alert('Just clicked me');
//    
//});




//jQuery('.box').hide();
//jQuery('.box').show();

//$('.box').click(  ()=> {
//    alert('just got kicked');
//    
//});
//
//$('#flashMessage').fadeOut(5000);
//  //$('#flashMessage').fadeIn(5000);
// $('#flashMessage').delay(3000);
// $('#flashMessage').slideUp();
 //$('#flashMessage').fadeIn(5000).slideDown(1000).delay(4000).slideUp();

//$('#flashMessage').fadeIn(5000).slideDown(1000).delay(4000).slideUp();


//const title= "Student <span>Profile</span>";

//const content = ;

//$('#blogTitlePreview').html("Student <mark>Profile</mark>");


//blogTitlePreview
//$(".profile-header").html();
$('#previewButton').click(function(){
  const title = $('#blogTitleInput').val();
  const content=$('#blogContentInput').val();
  
  $('#blogTitlePreview').text(title);
  $('#blogContentPreview').html(content);

});
//$('.spoiler span').hide();
$('.spoiler').on('click','button', function(event){
                       console.log(event.target);
     // ('.spoiler span').show();   
      //  ('.spoiler button').hide();
//$(event.target).prev().show();
// $(event.target).hide();
  $(this).prev().show();
 $(this).hide();
});


// Creating 'Reveal Spoiler' button
const $button =$('<button> Reveal Spoiler </button>');
$('.spoiler').append($button);
$('.spoiler span').hide();




//$('.spoiler button').click(function(){
//          $('.spoiler span').show();   
//          $('.spoiler button').hide();
//        });
//
//


//
//$(".student-list").on('click','ul',fucntion(event){
//                      
//                      $(event.target).alert('broom');
//                      
//                      
//                      });

//
//$(".student-list").on('click', function(event){
//                             console.log(event.target);
//                                      
//                           //  $('.spoiler span').show();   
//                            // $('.spoiler button').hide();
// $(event.target).hide();
//});
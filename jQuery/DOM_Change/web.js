 $('button').click(function() {
                  // Write code here
                  const newName = $('#name-input').val();
                  $('.profile-name').text(newName);
                  console.log( $('.profile-name').text());
                   //$('.profile-name').text(newName);
});
var playlist=[];

playlist.push('I did it my way !');

playlist.push('I did it my way bllllll !');

playlist.unshift('rock N roll');

printList(playlist);



function printList( list ) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

function print(html) {
  document.write(html);
}
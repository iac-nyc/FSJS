var playList = [
  [ 'I Did It My Way','sinatra'],
  ['Respect', 'boom'],
  [ 'Imagine','lennon'],
  ['Born to Run','mikkk'],
  ['Louie Louie','louica'],
  ['Maybellene','may']
];

function print(message) {
  document.write(message);
}

function songList( song ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < song.length; i += 1) {
    listHTML += '<li>' + song[i][0]  +'  by ' + song[i][1]+ '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

songList(playList);






















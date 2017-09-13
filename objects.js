var playlist = {
  GreenDay: "21 Guns",
  SnowPatrol: "Run",
  Imaginedragons: "Dream"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  console.log(playlist);
  var bool = delete playlist.artistName;
  console.log(bool);
  console.log(playlist);
  return playlist
}

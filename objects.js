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

  return delete playlist.artistName
}

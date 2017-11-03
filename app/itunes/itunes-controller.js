function ItunesController() {
  var itunesService = new ItunesService()
  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(draw); //after get music by artist returns what are you doing with the objects?
  }

  //Start coding here
  function draw(songList) {

    var elem = document.getElementById('row');
    elem.innerHTML = '';
    var songTemplate = '';
    var song = songList.title

    for (song in songList) {

      var songIndex = songList[song];
      songTemplate += `
      <div class="col-md-6">
          <ul id='song-list'>
              <div>
                  <img src="${songIndex.albumArt}" alt="">
                  <h4>${songIndex.title}</h4>
                  <audio controls="controls" src="${songIndex.preview}"></audio>
              </div>
          </ul>
      </div>
      `
    }
    elem.innerHTML = songTemplate


  }
}

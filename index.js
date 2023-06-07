function filterAlbums() {
    var searchTerm = document.getElementById('search-input').value.toLowerCase();
    var albumArtists = document.getElementsByClassName('album-artist');
    for (var i = 0; i < albumArtists.length; i++) {
        var albumArtist = albumArtists[i];
        var artistName = albumArtist.getAttribute('data-artist').toLowerCase();
        var albums = albumArtist.getElementsByClassName('album-list')[0].getElementsByTagName('li');
        var foundMatch = false;
        for (var j = 0; j < albums.length; j++) {
            var album = albums[j];
            var albumName = album.getElementsByClassName('album-name')[0].textContent.toLowerCase();
            if (artistName.includes(searchTerm) || albumName.includes(searchTerm)) {
                album.style.display = 'flex';
                foundMatch = true;
            } else {
                album.style.display = 'none';
            }
        }
        if (foundMatch) {
            albumArtist.style.display = 'block';
        } else {
            albumArtist.style.display = 'none';
        }
    }
}
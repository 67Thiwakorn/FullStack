class Media {
    constructor(info) {
        this.publishedDate = info.publishedDate;
        this.name = info.name;
    }
}

class Song extends Media {
    constructor(songData) {
        super(songData);
        this.artist = songData.artist;
        this.album = songData.album;
    }
}

const mySong = new Song({
    name: "Shape of You",
    artist: "Ed Sheeran",
    album: "Divide",
    publishedDate: "2017-01-06"
});

console.log(mySong);
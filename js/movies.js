function MovieGen() {
    this.moviesArray = [
        "Interstellar",
        "Cloud Atlas",
        "2001 A Space Odyssey",
        "Blade Runner 2049"
    ];

    this.randomMovie = function() {
        var movie = this.moviesArray[Math.floor(Math.random() * this.moviesArray.length)];
        var index = this.moviesArray.indexOf(movie)
        if (index > -1) {
            this.moviesArray.splice(index, 1);
        };
        return movie;
    };
}

module.exports = MovieGen;
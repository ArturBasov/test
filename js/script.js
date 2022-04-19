"use strict";

const numberOfFilms = +prompt("How much films have you watched yet?", "");

const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};
console.log(personMovieDB);

for (let i = 0; i < 2; i++) {
  let nameOfTheLastFilm = prompt("One of the last movies you watched", "");
  let rateOfTheLastFilm = +prompt("Rate it");
  personMovieDB.movies[nameOfTheLastFilm] = rateOfTheLastFilm;
  console.log(personMovieDB.movies);
}

alert(JSON.stringify(personMovieDB));

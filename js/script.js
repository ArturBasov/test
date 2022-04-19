"use strict";

let numberOfFilms;

function start() {
  while (true) {
    numberOfFilms = +prompt("How much films have you watched yet?", "");
    if (
      typeof numberOfFilms == "number" &&
      numberOfFilms >= 0 &&
      numberOfFilms != ""
    ) {
      break;
    } else {
      alert("Wrong answer!");
    }
  }
  detectPersonalLevel();
}

function detectPersonalLevel() {
  if (numberOfFilms < 10) {
    alert("So little...");
  } else if (numberOfFilms < 30) {
    alert("Not bad!");
  } else {
    alert("OMG!!!");
  }
}

start();

const personMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: true,
};
console.log(personMovieDB);

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let nameOfTheLastFilm;
    let rateOfTheLastFilm;
    while (true) {
      nameOfTheLastFilm = prompt("One of the last movies you watched", "");
      if (!nameOfTheLastFilm || nameOfTheLastFilm.length >= 50) {
        alert("Wrong answer!");
      } else {
        break;
      }
    }
    rateOfTheLastFilm = +prompt("Rate it");
    personMovieDB.movies[nameOfTheLastFilm] = rateOfTheLastFilm;
    console.log(personMovieDB.movies);
  }
}

rememberMyFilms();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personMovieDB.genres[i - 1] = prompt(
      `What's your favourite movie genre?\n Top 3. №${i} - ?`
    );
  }
}
writeYourGenres();

function showMyDB() {
  if (personMovieDB.privat == false) {
    alert(JSON.stringify(personMovieDB));
  }
}

showMyDB();

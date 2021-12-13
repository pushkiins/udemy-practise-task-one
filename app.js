"use strict";

let numberOfFilms = +prompt("сколько фильмов выы посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i < 2; i++) {
    const a = prompt("один из последних просмотренных фильмов", ""),
          b = prompt("на сколько оцените его", "");
          
          if (a != null && b != null && a != "" && b != "" && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log("done");
          } else {
              console.log("error");
              i--;
          }
}

if (personalMovieDB.count <= 10) {
    console.log("Просмотренно довольно мало фильмов");
} else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
    console.log("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    console.log("Вы киноман");
} else {
    console.log("Произошла ошибка")
}

console.log(personalMovieDB);
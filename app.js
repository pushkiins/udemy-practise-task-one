"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt("сколько фильмов выы посмотрели?", "");
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("сколько фильмов выы посмотрели?", "");
    }
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms () {
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
}

rememberMyFilms();


function personalMovieDB () {
    if (personalMovieDB.count <= 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if (10 <= personalMovieDB.count && personalMovieDB.count <= 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка")
    }    
}

personalMovieDB();

function shoMyDB (hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}

shoMyDB(personalMovieDB.privat);

function writeYourGenres () {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt("ваш любимый жанр под номером ${i}");
    }
}

writeYourGenres();
"use strict";

const numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели', '99');

let personalMuvieDB = {
    count: numberOfFilm,
    muvies: {},
    actors: {},
    generes: [],
    privat: false
};

let a = prompt("какой последний фильм вы смотрели?", ""), 
    b = +prompt('на сколькоо вы его оцените ?', ''),
    c = prompt("какой последний фильм вы смотрели?", ""), 
    d = +prompt('на сколькоо вы его оцените ?', '');
personalMuvieDB.muvies[a] = b;  
personalMuvieDB.muvies[c] = d; 



console. log(personalMuvieDB);
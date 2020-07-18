"use strict";

let numberOfFilm;
function start(){
    while(numberOfFilm == '' || numberOfFilm == null || isNaN(numberOfFilm)) {
        numberOfFilm = +prompt('Сколько фильмов вы уже посмотрели', '99');
    
}

}
// start();



let personalMuvieDB = {
    count: numberOfFilm,
    muvies: {},
    actors: {},
    generes: [],
    privat: false
};

function rememberMyFilms(){
    let a, b;
    for( let i = 0; 
        i<2;
        ++i) {
            a = prompt("какой последний фильм вы смотрели?", ""); 

            if (+a == 0 || String(a).length >50){
                --i;
                continue;
            }

            b = +prompt('на сколькоо вы его оцените ?', '');

            if (isNaN(b) || b == 0 || String(b).length >20 ){
                --i;
                continue;
            }
            personalMuvieDB.muvies[a] = b;
        
    
    }
    
}

// rememberMyFilms();

function detectPersonalLevel() {
    if(personalMuvieDB.count < 10){
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMuvieDB.count < 30){
        alert("Вы классический зритель");
    } else {
        alert("Вы киноман");
    }

}

// detectPersonalLevel();

function showMyDB(hidden){
    if (!hidden ) {
        console. log(personalMuvieDB); 
    }

}

showMyDB(personalMuvieDB.privat);

function writeYourGenres() {
    let ganr;
    for( let i = 1; 
        i <=3;
        ++i) {
            ganr = prompt(`Ваш любимый жанр под номером ${i}`, ""); 

            if (+ganr == 0 || String(ganr).length >50){
                --i;
                continue;
            }

            
            personalMuvieDB.generes[i-1] = ganr;
        
    
    }
}

writeYourGenres();


// // if (numb == 49) {
// //     console.log('не верно');
    
// // } else if ( numb == 39) {
// //     console.log(' не верно ');
// // } else if ( numb == 0) {
// //     console.log(' верно ');
// // } else { 
// //     console.log( "не нашел ");
// // }
// // const numb = 50; 

// // switch( typeof(numb) ) {
// //     case 49: 
// //         console.log('не верно');
// //         break;
// //     case 39: 
// //         console.log('не верно');
// //         break;
// //     case 0: 
// //         console.log(' верно');
// //         break;
// //     default: 
// //         console.log('не нашел');
// //         break;
// //     case 'number': 
// //         console.log(' верно');
// //         break;
    
// // }
// // console.log(typeof(numb))

// // (4==='4') ? console.log('true') : console.log('folse');\

// let num = 50;
// let afd;


// // while (num < 55){
// //     console. log( num );
// //     num++;
// // }
// // do {
// //     num++;
// //     afd = num
// //     console. log( num );
// // } while(afd != 56) ;
// for(let i=1; i>0; i++){ 
//     if (i%2== 0) {
//         continue;
//     }
//     console. log( num );
//     num++;
// // }
// let n = +prompt('вывести простые числа до какого числа', '') ;
// one: for (let i =2; i<=n; i++) {
//     for(let k = 2; k < i; ++k){
//         if (i % k == 0){
//             continue one;
//         }
//     }
//     console.log(i);
// }
// let num =10;

// function ret() {
//      num =50;
//     return num;
// }
// ret()
// console.log (2%1)

// const log = 'hello world!!';

// console.log(log.slice(6));
// console.log(log);

// const g = {
    
//     name: 'cent',


// };
// const c  = {};
// c.name = g.name;
// console.log(c == g);

// function isEmpty(obj) {
//     for(let key in obj) {
        
//             return false;
        
//     }
//     return true;
// }   

// let schedule = {};

// console.log( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// console.log( isEmpty(schedule) )

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 'mnogo'
//   };
// function multiply(obj) {
    
//     for (let key in obj) {
       
//         if ( typeof(obj[key]) == 'number' )  {
           
//             obj[key] *= 2;
//         }
//     }
//     return obj;
// }
// console.log( multiply(salaries) );

// let sum = 5;
// function input() {
//     sum = 10
// }
// input();
// console.log(sum);
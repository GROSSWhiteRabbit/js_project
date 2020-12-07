"use strict";







let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    generes: [],
    privat: false,
    SetNumberOfFilms() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели', '99');
        while(this.count === 0 || this.count === '' || this.count == null || isNaN(this.count)) {
          this.count = +prompt('Сколько фильмов вы уже посмотрели', '99');
        
        }
        console.log(`Вами просмотренно ${this.count} фильмов.`)
    },


    rememberMyFilms(numbers = 1){
      let a, b;
      for( let i = 0; 
          i<numbers;
          ++i) {
              a = prompt("какой фильм вы смотрели?", ""); 
  
              if (+a == 0 || String(a).length >50){
                  --i;
                  continue;
              }
  
              b = +prompt('на сколькоо вы его оцените ?', '');
  
              if (isNaN(b) || b == 0 || String(b).length >20 ){
                  --i;
                  continue;
              }
              personalMovieDB.movies[a] = b;
          
      
      }
      console.log('Ваш список просмотренных фильмов:')
      for (const movie in this.movies) {
        console.log(`Фильм ${movie}, оценка ${this.movies[movie]}`)
      }
    },


    detectPersonalLevel() {
      if(personalMovieDB.count < 10){
          alert("Просмотрено довольно мало фильмов");
      } else if (personalMovieDB.count < 30){
          alert("Вы классический зритель");
      } else {
          alert("Вы киноман");
      }
  
    },


    

    writeYourGenres() {
      let ganr;
      for( let i = 1; 
          i < 2;
          ++i) {
              ganr = prompt(`Вашы любимые жанры через запятую`, ""); 
  
              if (+ganr == 0 || String(ganr).length >50){
                  --i;
                  continue;
              }
              
              
              personalMovieDB.generes = ganr.split(", ");
          
      
      }
      
      personalMovieDB.generes.forEach((item, i) => console.log(`Любимый жанр #${i + 1} - это ${item}`) );
      
    },

    showMyDB(){
      if (!this.privat ) {
          console. log(personalMovieDB); 
      } else{
        console.log(`База данных приватна`)
      }

    },

    toggleVisibleMyDB() {
      this.privat = (this.privat) ? false : true ;
      console.log(`Свойство приват : ${this.privat}`)
    }
         
};

personalMovieDB.SetNumberOfFilms()

personalMovieDB.rememberMyFilms();



personalMovieDB.detectPersonalLevel();



personalMovieDB.showMyDB();





















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

// let user = { name: "Джон" };
// let admin = { name: "Админ" };

// function sayHi() {
//   console.log( this.name );
// }

// "use strict";
// let obj, method;

// obj = {
//   go: function() { console.log(this); }
// };

//         // (2) [object Object]
// method = obj.go;    // (3) undefined


// method()

// "use strict";

// function Calculator() {
//     this.read = function() {
//       this.a =  +prompt('a?', '');
//       this.b = +prompt('b?', '');
//     };
//     this.sum = function() {
//         return (
//         alert(this.a + this.b)
//         );
//     };
//     this.mul = function() {
//         return (
//             alert(this.a * this.b)
//         );
//     };
// }
// const ca1 = new Calculator();
// ca1.read();
// ca1.sum();

// ca1.mul();
// 'use strict';

// let ladder = {
//     firstname: 'jhon',
//     secondName: 'jon',
//     age: 30,
//     showAge() {
//         return this;
//     }
// };
// console.log(!!undefined);
// undefined
// 'use strict';

// function readNumber() {
//     let num;
//     do {
//          num = +prompt('ведите число', '');
//         console.log(isNaN(num));

//     } while(num != '' && num != null && isNaN(num) );

// }
// readNumber();
// 'use strict';

// function random(min, max) {
//     let num = min;
//     while(num <= min){
//         num = Math.random() * max;

//     }
//     return (Math.round(num));
// }

// alert( random(1, 5));
// 'use stict';
// function ucFirst(str) {
//     if (!str) {
//         return str; } 
//         str = str.trim();
//     return str[0].toUpperCase() + str.slice(1);
// }

// console.log(ucFirst(' vasya'));

// function checkSpam(str) {
//     if(!str) {
//         return str;
//     }
//     return str.toLowerCase().includes('viagra') || str.toUpperCase().includes('XXX');
// }
// console.log(checkSpam('free '));
// 'use strict';

// // function truncate(str, maxlength) {
// //     if(str.length > maxlength) {
// //         return str.slice(0,maxlength-1) +"…";
// //     }
// //     return str;

// // }

// // console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

// function extractCurrencyValue(str) {
//     return +(str.slice(1));
// }
// console.log(extractCurrencyValue('$120') === 120 );
// 'use script';
// // let arr = [ 'Яблоко', { name: 'Джон' }, true, function() { alert('привет'); } ];
// // alert(arr);
// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');


// styles[ Math.round(styles.length/2) - 1] = 'Классика';
// console.log(styles);
// styles.shift();


// styles.unshift('Регги');
// styles.unshift('Рэп');

// console.log(styles);
// 'use strict';

// function sumInput() {
//     let arroysum = [];
//     while(true) {
//         let value = prompt('ввидите число', '');
//         if (value == '' || value == null) {
//             break;
//         }
//         arroysum.push(+value);
//     }
//     let sum = 0;
//     for ( let elem of arroysum) {
//         sum += elem;
//     }
//     return alert(sum);
// }

// sumInput()
// 'use strict';


// function getMaxSubSum(array){
    
//     let sums = [];
//     let maxSum = 0;
//     let timesValue = 0;
//     for ( let i = 0; i<array.length;i++){
//         let sum = 0;
//         for (let k = i ; k< array.length;k++) {
//             sum += array[k];
//             if( maxSum < sum){
//                 maxSum = sum;
//             }
//         }
//     }   
//     return maxSum;
// }


// console.log(getMaxSubSum([-1, 2, 3, -9, 11]));

// let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//     ];
// console.log(matrix[1, 1]);

// 'use strict';

// let arr = ["Я", "изучаю", "JavaScript"];

// arr.splice(-1, 0, 'test');
// arr.splice(-1, 0, 'test');
// console.log(arr);
// 'use strict';
// function camelize(str) {
//    return str.split('-')
//    .map((item, index) => (index != 0) ? item[0].toUpperCase() + item.slice(1) : item )
//    .join('');

// }

// console.log(camelize('list-style-image'));

// function filterRange(arr, a, b) {
//   return  arr.filter(item =>  (item >= a && item <= b) );

// }
// console.log(filterRange([5, 3, 8, 1], 1, 4));
// 'use strict' ;

// function filterRangeInPlace(arr, a, b) {

//         for(let i = 0; i < arr.length; i++){
            
//        if (arr[i]<=a || arr[i]>= b) { 
//            arr.splice(i, 1);}
//         }
//         return arr;
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// 'use strict';
// // let arr = [5, 2, 1, -10, 8];
// // arr.sort((a, b) => b - a);

// function copySorted(arr) {
//    return arr.concat()
//         .sort();

// }
// let arr = ["HTML", "JavaScript", "CSS"];

// let sorted = copySorted(arr);

// console.log( sorted ); // CSS, HTML, JavaScript
// console.log( arr ); // HTML, JavaScript, CSS (без изменений)

// 'use strict';

// function Calculator() {
//     this.operators = ['+', '-'];
// //     this.acts = [(a, b) => a + b, (a, b) => a - b];
// //     this.calculate = function (str) {
// //     let arrElement = str.split(' ');

// //       const indexOperators = this.operators.findIndex((elem, index) => elem === arrElement[1] );
// //       return this.acts[indexOperators](+arrElement[0], +arrElement[2]);
// //     };
// //     this.addMetod = function (operator , fn) {
// //         this.operators.push(operator);
// //         this.acts.push(fn);
// //     };
// // } 


// // let powerCalc = new Calculator;
// // powerCalc.addMetod("*", (a, b) => a * b);
// // powerCalc.addMetod("/", (a, b) => a / b);
// // powerCalc.addMetod("**", (a, b) => a ** b);

// // let result = powerCalc.calculate("2 + 3");
// // console.log( result ); // 8
// // 'use strict';



// // let vasya = { name: "Вася", age: 25 };
// // let petya = { name: "Петя", age: 30 };
// // let masha = { name: "Маша", age: 28 };

// // let users = [ vasya, petya, masha ];

// // let names = users.map(user => user.name);
// // console.log( names );
// 'use strict';

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => { return {
//     'fullName': user.name + ' ' +  users['surname'] ,
//     'id': user.id
// };});

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// console.log( usersMapped[0].id ); // 1
// console.log( usersMapped[0].fullName ); // Вася Пупкин
// 'use strict';

// function sortByAge(users) {
//     return users.sort((a, b) => a.age - b.age);
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// console.log(sortByAge(arr));

// // теперь: [vasya, masha, petya]

// 'use strict';
// function shuffle(arr) {
//     for (let i = 0; i< arr.length; i++){
//         if (Math.random() > 0.5) {
//             const k = Math.round(Math.random() * (arr.length-1 ));
//              const timesValue = arr[i];
//             arr.splice(i, 1) ;
//             arr.splice(k, 0, timesValue);
//         }
            
//     }
//     return arr;
// }
// let arr = [1, 2, 3];

// let count = {
//     '123': 0,
//     '132': 0,
//     '213': 0,
//     '231': 0,
//     '321': 0,
//     '312': 0
//   };
  
//   for (let i = 0; i < 1000000; i++) {
//     let array = [1, 2, 3];
//     shuffle(array);
//     count[array.join('')]++;
//   }
  
//   // показать количество всех возможных вариантов
//   for (let key in count) {
//     console.log(`${key}: ${count[key]}`);
// //   }
// 'use strict'

// function getAverageAge(users) {
//  return users.reduce((prev, elem) => prev + elem.age, 0)/users.length;
// }

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];

// console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

// 'use strict'




// function unique(arr) {
//   let arruniq= [];
//   for (let str of arr){
//     if (!arruniq.includes(str)){
//     arruniq.push(str);
//     }
//   }
//  return arruniq
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];

// console.log( unique(strings) ); // кришна, харе, :-O

// 'use stric';

// const options = {
//   name: 'ваня',
//   style: 'рок',
//   age: 81,
//   colore: {
//     board : 'black',
//     col: 'red',
//   },
//   makeTest: function () {
//     console.log('test')
//   }
// };

// for(let key in options){
//   if (typeof(options[key]) === 'object') {
//     for (let i in options[key]) {
//       console.log(`во опциях есть ключ ${i}, со значением ${options[key][i]}`);
//     }
//   } else {
//     console.log(`во опциях есть ключ ${key}, со значением ${options[key]}`);
//   }
// }
// console.log(Object.keys(options).length);
// options.makeTest()
// const {col} = options.colore;
// console.log(col);
// 'use script';
// const arr = [1, 12, 23, 6, 18];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//   return a - b;
// }



// // arr[99] = 0;
// // console.log(arr);
// arr.forEach(function(item, i, arr) {console.log(`${i}: ${item} внутри массива ${arr}`)});

// arr.pop();
// arr.push(10)
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for ( let velue of arr) {
//   console.log(velue);
// }

// 'use strict';

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));

// 'use strict' ;

// function copy(mainObj) {
//   const copy ={};
//   for (let key in mainObj) {
//     copy[key] = mainObj[key];
//   }
//   return copy;
// }

// const obj = {
//   a: 5,
//   b: 1,
// };

// const copyObj = copy(obj);
// copyObj.a = 10;


// const add = {
//         d: 43,
//         c: { f: 65,
//             h: 64,},

// };

// const copyAdd = Object.assign({}, add);

// copyObj.d = 1;
// // console.log(copyObj);
// copyAdd.d = 3;
// // console.log(copyAdd);
// // console.log(add);
// console.log(Object.assign(copyAdd, add));

// 'use strict';

// const arr = ['df', 'fd', 'ar', 'st'];

// const copyArr = arr.slice();
// copyArr[0] = 'aa';

// console.log(copyArr);
// console.log(arr);

// const video = ['rdgfd', 'sdfsdf', 'sdfdsf'],
//       blog = [ 'wordpress', 'liveJornal', 'dfgdg'],
//       internet = [...video, ...blog, 'vk', 'google'];

// console.log(internet);
// const copyVideo = [...video];
// copyVideo[1] = 1;
// console.log(copyVideo);

// console.log(video);

// const q = {
//   one: 1,
//   two: 2,
// };

// const newArroy = {...q};

// console.log( newArroy);

// const v1 = '123';
// const v2 = true;
// const v3 = 10;
// const v4 = Symbol('foo')

// var obj = Object.assign({}, v1, null, v2, undefined, v3, v4); 
// // Примитивы будут обёрнуты, а null и undefined - проигнорированы.
// // Обратите внимание, что собственные перечисляемые свойства имеет только обёртка над строкой.
// console.log(obj); // { "0": "1", "1": "2", "2": "3" }

// 'use string';

// console.dir([1, 2, 3, 4,]);

// const soldier = {
//   health: 400,
//   armor: 100,
//   sayHello: function () {
//     console. log (`Hello`);
//   }
// };

// const jhon = Object.create(soldier);

// Object.assign(jhon, {
//   health: 100,
//   gain:  'x2'
// });

// // const jhon = {
// //   health: 100,
  
// // };

// // jhon.__proto__ = soldier; 
// // Object.setPrototypeOf(jhon, soldier)

// console.log(jhon.armor);

// 'use string';

// let dictionary = Object.create(null);

// Object.defineProperty(dictionary, 'toString', {
//   value: function() {
//     return Object.keys(this).join();
//   },
 
// });
// // ваш код, который добавляет метод dictionary.toString

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"
// var protoHidden = {};
// Object.defineProperty(protoHidden, '__proto__',
//                       { value: null, writable: true, configurable: true, enumerable: true });

// console.log(protoHidden.__proto__); // 42
// console.dir(protoHidden);

// 'use strict';
// function F() {}
// console.dir( F );
// let a = (1,5 - 1) * 2;

// console.log(a);


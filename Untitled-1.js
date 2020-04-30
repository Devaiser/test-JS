// let obj = {
//   name: 'Alex'
// };

// const arr = [1, 3, 4, 5];

// to String

// 1)
console.log(typeof(String(4)));
// 2)
console.log(typeof('ww' + false));
console.log('https://vk.com/catalog/' + 5);

// to Number

// 1)
console.log(typeof(Number('4')));
// 2)
console.log(typeof(5 + + '5'));
//3)
console.log(typeof(parseInt('15px', 10)));

let ans = +prompt('Hello?', '');

// 0, '', null, undefined, NaN -Всегда false

let switcher = null;

if (switcher) {
  console.log('Working..');
}

switcher = 1;

if (switcher) {
  console.log('Working..');
}

// 4)
console.log(typeof(Boolean('4')));
// 5)
console.log(typeof(!!'4'));
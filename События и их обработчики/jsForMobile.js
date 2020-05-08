// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener('DOMContentLoaded', function () {
  let box = document.querySelector('.box');

  // box.addEventListener('touchstart', function (e) {
  //   e.preventDefault();
  //   console.log('Red box: touchstart');
  //   console.log(e.target);
  //   console.log(e.touches[0].target);
  //   console.log(e.changedTouches);
  //   console.log(e.targetTouches);
  // });

  box.addEventListener('touchmove', function (e) {
    e.preventDefault();
    console.log('Red box: ' + e.touches[0].pageX);
  });

//   box.addEventListener('touchend', function (e) {
//     e.preventDefault();
//     console.log('Red box: touchend');
//   });

  // new RegExp('pattern', 'flags');
  // /pattern/

  // let ans = prompt('Введите ваше имя');

  // let req = /n/gi;

  // console.log(ans.search(req));
  // console.log(ans.match(req));
  // console.log(req.test(ans));
  

  // i -Регистр
  // g -Глобальность
  // m -Многострочность

  // \d \D -Число
  // \w \W -Буквы
  // \s \S -Пробелы

  // let pass = prompt('Введите пароль');

  // console.log(pass.replace(/./g, '*'));
  // alert('12-23-54'.replace(/-/g, ':'));

  // let ans = prompt('Введите число');

  // let req = /\d/g;

  // console.log(ans.match(req));

  let str = 'My name is R2D2';

  console.log(str.match(/\w\d\w\d/i));
  
});
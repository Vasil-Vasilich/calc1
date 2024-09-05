// получаем доступ к элементам
let i1 = document.querySelector(".i-1");
let ch1 = document.querySelector(".ch-1");
let i2 = document.querySelector(".i-2");
let i3 = document.querySelector(".i-3");
let i4 = document.querySelector(".i-4");
let i5 = document.querySelector(".i-5");
let i6 = document.querySelector(".i-6");
let i7 = document.querySelector(".i-7");
let i8 = document.querySelector('.i-8');
const btn = document.querySelector(".btn-calc");

// устанавливаем неактивным поле ввода обьема бензина
i2.setAttribute("disabled", true);

// при установке галочки в чекбокс активируем поле ввода объема бензина
ch1.onclick = f02;

/*стрелочная функция
() => {
  if (ch1.checked) {
    i2.removeAttribute("disabled");
  } else {
    i2.setAttribute("disabled", true);
    i2.value = '0';
  }
};*/

function f02() {
  if (ch1.checked) {
    i2.removeAttribute("disabled");
  } else {
    i2.setAttribute("disabled", true);
    i2.value = "0";
  }
}

//  тернарное ветвление помещается в тег input c type='checkbox':
// onclick = i2.disabled = (this.checked) ? false : true;

// запрещаем вводить отрицательные числа в поля ввода и чтобы не вводился первый 0
i1.oninput = f03;

function f03() {
  let i1Str = String(i1.value);
  for (let i = 0; i < i1Str.length; i++) {
    //console.log(i1Str.length);
    if (i1Str[0] == 0) {
      let s1 = i1Str.substring(1, i1Str.length);
      console.log(s1);
      i1.value = +s1;
    }
  }
  if (i1.value < 0) {
    i1.value = 0;
  }
}

i2.oninput = () => {
  let i2Str = String(i2.value);
  for (let j = 0; j < i2Str.length; j++) {
   // console.log(i2Str.length);
    if (i2Str[0] == 0) {
      let s2 = i2Str.substring(1, i2Str.length);
      i2.value = +s2;
    }
  }
  if (i2.value < 0) {
    i2.value = 0;
  }
  if ((i2.value != 1 && i2.value < 1) || (i2.value != 1 && i2.value > 1) || (i2.value !=1 && i2.value <=4)) {
    i8.innerHTML = 'а';
  }
  if (i2.value == 1) {
    i8.innerHTML = '';
  }
  if (i2.value >= 5) {
    i8.innerHTML = 'ов';
  }
};

function f01() {
  // формула расчета c
  let resI1 = parseInt(i1.value);
  let resI2 = parseFloat(i2.value);
  let sum = parseFloat((resI2 / resI1) * 1000).toFixed(1);
  if (sum === "Infinity" || sum === "NaN") {
    sum = 0;
  }
  //   вывод значений другие поля
  i3.innerHTML = resI1;
  i4.innerHTML = resI2;
  i5.innerHTML = sum;
  i6.innerHTML = resI2;
  //   установливаем окончания
  if (resI2 < 1 || resI2 > 1 || resI2 < 5) {
    i7.innerHTML = "a";
  }
  if (resI2 == 1) {
    i7.innerHTML = "";
  }
  if (resI2 >= 5) {
    i7.innerHTML = "ов";
  }
  //   очищаем формы ввода значений
  i1.value = 0;
  i2.value = 0;
}

btn.addEventListener("click", f01);

/*btn.onclick = () => {
  let resI1 = i1.value;
  let resI2 = i2.value;
  let sum = (resI2 / resI1) * 1000;
  i3.innerHTML = resI1;
  i4.innerHTML = resI2;
  i5.innerHTML = sum;
  console.log(sum);
  console.log(`${i1.value} ${i2.value}`);
};*/

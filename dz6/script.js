/*1. Дана строка 'aaa@bbb@ccc'. Замените все @ на ! с помощью глобального
поиска и замены.*/

let str = 'aaa@bbb@ccc';
str = str.split('');

let str1 = str.map(item => {
	let str2 = item;
	if(item == '@') str2 = '!';
	return str2;
})

// let str1 = str.replace(/@/g, '!');

console.log(str1);

/*2. В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/

let date = '2025-12-31';
date = date.split('-');

let date2 = date.map(item => {
	let newDate = item;
	if (item == 2025) newDate = '31' + '/';
	if (item == 31) newDate = '/' + '2025';
	// if (item == '-') newDate = '/';
	return newDate;
})

console.log(date2.join(''));

/*3. Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

let str2 = 'Я учу javascript!';

console.log(str2.substr(2, 3));
console.log(str2.substring(2, 5));
console.log(str2.slice(2, 5));

console.log(str2.substr(6, 10));
console.log(str2.substring(6, 16));
console.log(str2.slice(6, 16));

/*4. Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень
из суммы кубов его элементов. Для решения воспользуйтесь циклом for.*/

let arr = [4, 2, 5, 19, 13, 0, 10];

let powElem = 0;

for (let i = 0; i < arr.length; i++) {
	powElem += (Math.pow(arr[i], 3));
}

console.log(Math.sqrt(powElem));

/*5. Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.*/

const positiveSum = function(a, b) {
	c = a - b;
	return Math.abs(c);
}

console.log(positiveSum(3, 5));

/*6. Выведите на экран текущую дату-время в формате 12:59:59 31.12.2014.
Для решения этой задачи напишите функцию, которая будет добавлять 0
перед днями и месяцами, которые состоят из одной цифры (из 1.9.2014
сделает 01.09.2014).*/

let time = new Date().toLocaleString('ru');

const timeArr = function(time) {
	let time1 = time.split(' ');
	let time2 = time1[1].split('.');
	let nol = '0';
	let timeArr2 = time2.map(item => {
		if (item.length == 1) item = nol.concat(item);
		return item;
	});
	
	timeArr2 = time1[0].concat(' ', timeArr2.join('.'));
	return timeArr2;
}

console.log(timeArr(time));

/*7. Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.*/
{
// let regexp = /[a][b]{/
// console.log(/ab/g.test(str));
let count = 0;

const checkReg = function(str) {
	str = str.split(' ');

	// let strR = [];
	// str.forEach(item => {
	// 	let regexp = /[a][b]{1,1000}[a]/gi;
	// 	if (regexp.test(item) == true) strR.push(item);
	// })
	// return strR.join(' ');

	let strR = '';
	str.forEach(item => {
		let regexp = /[a][b]{1,}[a]/gi;
		if (regexp.test(item) == true) strR += item + ' ';
	})
	return strR;
};

console.log(checkReg('aa aba abba abbba abca abea aba'));
}

/*8. Напишите ф-цию строгой проверки ввода номер телефона в
международном формате (<код страны> <код города или сети> <номер
телефона>). Функция должна возвращать true или false. Используйте
регулярные выражения.*/

const checkNumber = function(num) {
	let regexp = /(^\+375|\+380|\+370|\+371|\+48|\+7)[\d]{2,4}[\d]{7}$/g;
	if (!regexp.test(num)) return false;
	else return true;
};

console.log(checkNumber('+375291111111'));

/*9. Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
- весь адрес не должен содержать русские буквы и спецсимволы, кроме
одной «собачки», знака подчеркивания, дефиса и точки;
- имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
имя может содержать только буквы, цифры, но не быть первыми и
единственными в имени;
- после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
не может быть длиной менее 2 и более 11 символов.

Функция должна возвращать true или false. Используйте регулярные
выражения.*/

const checkEmail = function(email) {
	let regexp = /^[\d\w]{2,}@[\w]{2,}\.[\w]{2,11}$/gi;
	if (!regexp.test(email)) return false;
	else return true;
};

console.log(checkEmail('0hh@gmail.com'));

/*10. Напишите ф-цию, которая из полного адреса с параметрами и без,
например: https://tech.onliner.by/2018/04/26/smart-do-200/?
utm_source=main_tile&utm_medium=smartdo200#zag3 , получит адрес
доменного имени (https://tech.onliner.by), остальную часть адреса без
параметров (/2018/04/26/smart-do-200/), параметры
(utm_source=main_tile&utm_medium=smartdo200) и хеш (#zag3). В адресе
может и не быть каких-либо составляющих. Ф-ция должна возвращать
массив.

* Для быстрого составления регулярного выражения и проверки исп. онлайн-
сервис https://regex101.com/.

Для ввода значений можете использовать ф-цию prompt(), либо задавать
значения при инициализации переменных в коде.
Для вывода результатов скриптов вы можете использовать функции: alert()
для вывода всплывающего окна; console.log() для вывода в консоль браузера;
document.write() для вывода в «тело» HTML-документа.*/
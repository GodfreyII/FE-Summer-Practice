function main() {

var obj1 = {name:"sadsd", age: 21, admin: false, date: Date(), what: undefined, unknown: null, arr:[1,2,3,4,5]};
var obj2 = {};
var obj3 = {};
//clone() - функция для клонирования, написанная для этого задания.
obj2 = clone(obj1);
//Object.assign() - уже доступная функция, с помощью которой можно выполнить клонирование объекта
obj3 = Object.assign(obj2);
//На выходе получаем три объекта с идентичными полями, весь вывод выполняем в консоль
console.log(obj1);
console.log(obj2);
console.log(obj3);
}

function clone(obj) {
    var copy;

    // Обрабатывает строки, целые числа и булевые значения, а также null
    if (null == obj || "object" != typeof obj) {
		return obj;
	}

    // Обрабатывает дату
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Обрабатывает массив
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Обрабатывает объекты
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }
}
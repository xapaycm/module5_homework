let x = true;
type = typeof x;
console.log(type)
switch (type) {
    case 'number':
        console.log(x + ' - число');
        break;
    case 'string':
        console.log(x + ' - строка');
        break;
    case 'boolean':
        console.log(x + ' - логический');
        break;
    default:
        console.log('Тип x не определён')
}
/*Дана переменная Х, которая может принимать любое значение.
В зависимости от типа данных Х, в консоль выводится сообщение вида: «X — число».
Описано три случая: когда х = числу, строке или логическому типу.
В других случаях выводится сообщение: «Тип x не определён».*/
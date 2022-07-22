let myMap = new Map();
myMap.set("name" , "result");
myMap.set("Bill" , 14);
myMap.set("Back" , 18);
myMap.set("Katy" , 12);
myMap.set("Helen" , 22);

for (let name of myMap.keys()){
    console.log(`ключ - ${name} , значение - ${myMap.get(name)}`);
}
//Получение ключей и выведение в консоль всех значений в виде «Ключ — Х, значение — Y»
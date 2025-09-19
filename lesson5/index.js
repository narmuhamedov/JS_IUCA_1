// //callback
// function greeting(name, callback){
//     console.log('Привет ' + name);
//     callback();
// }

// function afterGreeting(){
//     console.log('Как ты?');
// }

// greeting('Dean', afterGreeting)

// //анонимный callback
// greeting('Sam', function(){
//     console.log('Рад тебя видеть');
    
// })


//замыкание
// function createCounter(){
//     let count = 0;
//     return function(){
//         count ++;
//         return count
//     }
// }

// let counter = createCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());





//анонимная функция 
// const numbers = [1,2,3,4,5];

// const squares = numbers.map(n=> n*n)
// console.log(squares)

// setTimeout(function(){
//     console.log('Привет как ты?'); 
// }, 2000);

// setTimeout(()=>console.log('Хорошо, а ты как?'),3000)







//структурное программирование
// меню
// const MENU = {
//     espresso: 2.5,
//     latte: 3.5,
//     tea: 1.8,
//     croissant: 2.0,
// };

// // проверка заказа
// function validateOrder(orderItems) {
//     const errors = [];
//     const valid = [];

//     for (const name of orderItems) {
//         if (MENU[name]) valid.push(name);
//         else errors.push(`Нет в меню: ${name}`);
//     }
//     return { valid, errors };
// }

// // подсчет суммы
// function calculateTotal(validItems) {
//     return validItems.reduce((sum, item) => sum + MENU[item], 0);
// }

// // применение скидки
// function applyDiscount(total, isLoyalCustomer) {
//     if (!isLoyalCustomer) return total;
//     return +(total * 0.9).toFixed(2);
// }

// // оформление чека
// function formatReceipt(items, total) {
//     const lines = items.map(i => `${i} - $${MENU[i].toFixed(2)}`);
//     lines.push('------------------------');
//     lines.push(`Итого: $${total.toFixed(2)}`);
//     return lines.join('\n');
// }

// // процесс заказа
// function processOrder(orderItems, isLoyalCustomer = false) {
//     const { valid, errors } = validateOrder(orderItems);
//     const sum = calculateTotal(valid);
//     const total = applyDiscount(sum, isLoyalCustomer);
//     const receipt = formatReceipt(valid, total);

//     if (errors.length) {
//         console.warn('Ошибка в заказе:', errors);
//     }

//     return { receipt, errors, total };
// }

// // пример
// const order = ["espresso", "latte", "pizza"];
// const result = processOrder(order, true);

// console.log(result.receipt);
// console.log("Ошибки:", result.errors);
// console.log("Итого с учетом скидки:", result.total);

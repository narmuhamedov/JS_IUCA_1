//Циклы (повторение)
//бесконечный цикл и его последствия
//Цикл while и do while
//Задача на переворот строки(самостоятельная работа)
//Игра угадай число
//Функции 2 способа написания declaration experession ключевое return
//Тернарный оператор


// //Тернарный оператор
// var age = Number(prompt('сколько вам лет?'))
// var status = (age>=18) ? "Взрослый":"Несовершеннолетний"
// alert(status)




// //experession
// var square2 = function(b,c){
//     return b*c;
// }
// console.log(square2(132,44));




// //declaration
// function square(a, b){
//     return a*b;
// }
// console.log(square(13, 44));






//Игра угадай число 10мин на размышление(чат gpt запрещен!!!)
// var secret = Math.floor(Math.random()*100)+1;
// var guess;
// var attemps = 0;

// do{
//     guess = Number(prompt('Комп загадал число от 1 до 100 угадай?'));
//     attemps++;
//     if(guess<secret){
//         alert('слишком маленькое');
//     }else if(guess>secret){
//         alert('слишком большое');
//     }else{
//         alert('Угадал! молодчик');
//     }
// }while(guess!== secret);






//password
// do{
//     password = prompt('Enter your password');
// }while(password !=='1234')
//     alert('Доступ разрешен');




// var i = 0;
// while(i<5){
//     console.log('i= '+i);
//     i++;
// }


//error
// var i = 0;
// while(i<5){
//     console.log("i= "+i);
    
// }





//Циклы (повторение)
for(var i = 1; i<=10; i++){
    console.log('Число -- ', i);
}

for(var i=1; i<=10; i++){
    if(i%2===0){
        console.log(i+' четное');
    }
    else{
        console.log(i+' нечетное');
    }
}




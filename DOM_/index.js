//DOM - document object model

// get element
const title = document.getElementById('title');
const nameInput = document.getElementById('name');
const hello = document.getElementById('hello');
const btn = document.getElementById('btn');
const status = document.getElementById('status');



//Обработчик события  при вводе имени
nameInput.addEventListener('input', function(){
    hello.textContent = "Привет, " + nameInput.value + "!"
    hello.style.color = 'darkred';
});

//Обработчик событий на кнопку при клике

btn.addEventListener('click', function(){
   status.textContent = 'Вы купили билет!';
   status.style.color = 'green' ;
});


// Обработчик при наведения на кнопку
btn.addEventListener('mouseover', function(){
    status.textContent ='Вы уверенны что хотите купить билет?';
    status.style.color = 'pink' ;
});


btn.addEventListener('dblclick', function(){
    status.textContent ='Вы купили VIP билет';
    status.style.color = '#9400D3' ;
});
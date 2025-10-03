const prices = {
    coffee: 100,
    tea: 20,
    burger: 200,
    pizza: 350
}

const nameInput = document.getElementById('name');
const dishSelect = document.getElementById('dish');
const countInput = document.getElementById('count');
const orderBtn = document.getElementById('orderBtn');
const status = document.getElementById('status');
const total = document.getElementById('total');

let totaSum = 0;

orderBtn.addEventListener('click', function(){
    const name = nameInput.value.trim();
    const dish = dishSelect.value;
    const count = parseInt(countInput.value);
   
    
    if(!name || !count  || count < 0 ){
        status.texContent = 'Заполните все поля';
        status.style.color = 'darkred';
        return;
    }

    const sum = prices[dish] * count;
    totaSum += sum;

    let dishName = '';

    switch(dish){
        case 'coffee':
            dishName = 'Кофе';
            break;
        case 'tea':
            dishName = 'Чай';
            break;
        case 'burger':
            dishName = 'Бургер';
            break;
        case 'pizza':
            dishName = 'Пицца';
            break;
    }

status.textContent = `${name}, вы заказали ${count} ${dishName} на сумму ${sum} сом`;
status.style.color = 'green';
total.textContent = `Общая сумма: ${totaSum}`;

countInput.value = "";

});
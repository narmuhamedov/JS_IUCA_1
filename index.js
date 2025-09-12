// var enterUserName = prompt('Как тебя зовут?');
// // вывод данных через html страницу
// document.writeln(enterUserName);
// // вывод через консоль
// console.log(enterUserName);
// // Вывод во сплывающее окно
// alert(enterUserName);


//1) String - все что находиться в кавычках это тип данных string
var customerName = 'Ivan';
var customerSurname = 'Ivanov';

console.log("Привет меня зовут" + customerName + " Мое фамилие"+ customerSurname);


//2) Number - числовой тип данных принимает числа 
var numberCost = 12345;
var numberCost2 = 12.44;

//3) Boolean - true false - логический тип данных
var Univer = true;
// 4) Underfined - неизвестный тип данных
var customerBirthDate; 
// 5) Null - ничего 
var customerBirthDate2 = null;
// 6) Objects - объекты
var customerPassport = {
    Series: 'ID',
    Number: '12345',
    INN: '1232343453442',
    IssueDate: '01-01-2001',
    ExpiryDate: '01-01-2010',
    Adress: 'Bishkek'
}

console.log(customerPassport.Number);





//var userName = 'Radomir';



//document.body.style.backgroundColor = '#333';
//alert('Нажми на кнопку!');

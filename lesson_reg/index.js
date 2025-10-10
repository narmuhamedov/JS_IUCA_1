//JSON
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    document.writeln('<h1>Пользователи</h1>');
    data.forEach(user => {
      document.writeln(`<p>${user.name}</p>`);
    });
  });






// let student = {name:'Aleks', age:26}
// let json_=JSON.stringify(student)

// document.writeln(json_)

// let student2 = '{"name":"Aleks", "age":26}'
// let json_2=JSON.parse(student2)

// document.writeln(json_2.name)





//Регулярные выражения

//Проверка email
// let email = 'test@mail.com'
// let pattern = /^[\w.-]+@[a-zA-Z]+\.[a-z]{2,}$/
// document.writeln(pattern.test(email));




//номер начинается с 0 и состоит из 10 цифр

//let phone_number = 'Привет мой номер 0550644770'
// let pattern = /^0\d{9}$/;
// document.writeln(pattern.test("0700123321"));




// let phone_number = 'Привет мой номер 0550644770'
// if(phone_number.includes("0550")){
//     document.writeln('Есть телефон');
// }

  fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const container = document.querySelector('.container');
                // Если JSON является массивом
                data.forEach(emp => {
                    container.innerHTML += `
                    <div class='card'>
                        <img src="${emp.photo}" alt="${emp.name}">
                        <h3>${emp.name}</h3>
                        <p>${emp.email}</p>
                        <p>${emp.company.name}</p>
                        <p>${emp.address.city}</p>

                    </div>
                    `;
                });
            })
            .catch(error => {
                console.error('Error loading data:', error);
                document.querySelector('.container').innerHTML = '<p>Ошибка загрузки данных</p>';
            });
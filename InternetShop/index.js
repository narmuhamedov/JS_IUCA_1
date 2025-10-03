const product = document.getElementById('product');
const desc = document.getElementById('desc');
const buyBtn = document.getElementById('buy');

buyBtn.addEventListener('click', ()=>{
    alert('Товар добавлен в корзину');
});

product.addEventListener('dblclick', ()=>{
    product.classList.toggle("big");
});

desc.addEventListener("mouseover", ()=>{
    desc.classList.add('hightlight');
});

desc.addEventListener('mouseout', ()=>{
    desc.classList.remove('hightlight');
});

product.addEventListener('contextmenu', (event)=>{
    event.preventDefault();
    alert('Товар добавлен в избранное!');
});


const items = document.querySelectorAll('.item:nth-child(even)');
let btn = document.getElementById('btn');
btn.addEventListener('click',() => {
    let color = "rgb(128, 169, 192)";
    for(let i = 0; i< items.length;i++){
        items[i].style.backgroundColor = color;
    }
})


let btntrans = document.getElementById('btn2');
btntrans.addEventListener('click',() => {
    let color = "transparent";
    for(let i = 0; i< items.length;i++){
        items[i].style.backgroundColor = color;
    }
})


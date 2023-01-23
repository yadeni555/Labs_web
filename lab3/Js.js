
let but = document.querySelector('#but');
but.addEventListener('click',() => {
    const items = document.querySelectorAll('.item:nth-child(even)');
    let color = "rgb(128, 169, 192)";
    for(let i = 0; i< items.length;i++){
        items[i].style.backgroundColor = color;
    }
})


let buttrans = document.querySelector('#but2');
buttrans.addEventListener('click',() => {
    const items = document.querySelectorAll('.item:nth-child(even)');
    let color = "transparent";
    for(let i = 0; i< items.length;i++){
        items[i].style.backgroundColor = color;
    }
})

let sortButton =document.querySelector(".sort")
sortButton.addEventListener("click",()=>{
    let items =document.querySelectorAll(".item")
    let arr = [...items].sort(function(a,b){
        return parseInt(a.querySelector(".cost").innerHTML,10)-parseInt(b.querySelector(".cost").innerHTML,10)
    })
let catalog = document.querySelector(".main-catalog")
catalog.innerHTML = ""
for (let elem of arr){
    catalog.append(elem)
}
})

let scroll = document.querySelector(".scroll")
scroll.addEventListener("click",()=>{
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})

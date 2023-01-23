const anchors = document.querySelectorAll('a[href*="#"]')

//Плавное опускания к контенту при нажатии на ссылку "каталог"
for (let anchor of anchors){
anchor.addEventListener("click", function(event){
event.preventDefault();
const blockID = anchor.getAttribute('href')
document.querySelector('' + blockID).scrollIntoView({
behavior:"smooth",
block: "start"
})
})
}

//Делаем прозрачными четные элементы
let EvenHighlightedNow = false; //Флаг, указывающий на то, прозрачны ли сейчас элементы
let EvenItems; //Четные элементы
let btn = document.getElementById('btn'); //Кнопка, которая активирует прозрачность

btn.addEventListener('click',() => {
    EvenHighlightedNow = true; //Ставим флаг
    EvenItems = document.querySelectorAll('.item:nth-child(even)'); //Добавляем/Обновляем прозрачные элементы
    let color = "rgb(128, 169, 192)"; //Выставляем цвет для четных элементов
    //Выставляем всем четным цвет
    for(let i = 0; i< EvenItems.length;i++){
        EvenItems[i].style.backgroundColor = color;
    }
})


let NonSortedElements = document.querySelectorAll('.item'); //Статический изначальный список элементов
let Elements = document.getElementsByClassName('item'); //Текущий список элементов
isSorted = false; //Флаг указывающий на состояние списка

//При нажатии на кнопку все элементы станут прозрачными
let btntrans = document.getElementById('btn2');
btntrans.addEventListener('click',() => {
    EvenHighlightedNow = false;
    let color = "transparent";
    for(let i = 0; i< Elements.length;i++){
        Elements[i].style.backgroundColor = color;
    }
})


let btnSort = document.getElementById('btnSort'); //Кнопка для сортировки
btnSort.onclick = function(event) {
    //Если не отстортирован
    if (!isSorted)
    {
        btnSort.style.backgroundColor = "rgb(128, 169, 192)"; //Выделяем кнопку цветом
        //Сортируем элементы пузырьком
        for ( let i = 0; i < Elements.length; i++){
            for ( let j = 0; j < Elements.length - i - 1; j++){
                //Достаем числа из span с помощью рег. выражения и конвертируем их в float
                let FirstDigit = parseFloat(Elements[j].children[2].innerHTML.match(/\d+/)); 
                let SecondDigit = parseFloat(Elements[j + 1].children[2].innerHTML.match(/\d+/));
                if (FirstDigit > SecondDigit){
                    Elements[j].before(Elements[j + 1]); //Меняем местами элементы
                }
            }
        isSorted = true; 
        }
    }
    else {
        //Вставляем элементы на их изначальные места
        //Кнопка обратно становится прозрачной
        btnSort.style.backgroundColor = "transparent";
        for (let i = 0; i < NonSortedElements.length; i++)
        {
            Elements[i].before(NonSortedElements[i]);
        }
        isSorted = false;
    }
    //Для сохранения выделения четных элементов
    if (EvenHighlightedNow){
        //По заверешнию сортировки все элементы становятся прозрачными
        for(let i = 0; i< Elements.length;i++){
            Elements[i].style.backgroundColor = "transparent";
            }
        //А затем снова выделяются текущие четные элементы
        EvenItems = document.querySelectorAll('.item:nth-child(even)');
        let color = "rgb(128, 169, 192)";
        for(let i = 0; i< EvenItems.length;i++){
            EvenItems[i].style.backgroundColor = color;
            }
        }
    
    
  };



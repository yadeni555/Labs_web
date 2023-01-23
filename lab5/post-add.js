let arr;
let span = document.getElementById("pic-span");
let label = document.getElementById("pic-label");
let btn = document.getElementById('btn-file');
btn.onchange = function () {
    const msg = new String(this.value);
    console.log(msg);
    arr = msg.split("\\");
    
    span.innerText="Выбранный файл - " + arr[arr.length - 1];
    label.style.width = (parseInt(span.offsetWidth) + 70 ) + "px"
  };


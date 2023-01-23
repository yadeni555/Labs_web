/*Настраиваю размер тегов под текст внутри*/
this.onload = () => {
  let labels = document.getElementsByClassName("Post-teg");
for ( let i = 0; i < labels.length; i++){

    labels[i].style.width = parseInt(labels[i].lastChild.offsetWidth + 20) + "px"
}
    
}
    
  

/*Валидация*/
class ValidationData{
    constructor(span, img, errText, successText){
      this.span = span;
      this.img = img;
      this.errText = errText;
      this.successText = successText;
    }
    set_err(){
      this.img.src="img/cross.PNG";
      this.span.innerHTML = this.errText;
      this.span.style.color = "red";
    }
    set_success(){
      this.img.src="img/galka.PNG";
      this.span.innerHTML = this.successText;
      this.span.style.color = "rgb(90,174,107)";
    }
  }

  function getGreen(map){
    for (var [key, value] of map) {
      value.set_success();
    }
  }

  
let login = document.getElementById("user-login");
var login_val = new Map();
login_val.set("symbols", new ValidationData(document.getElementById("val-log-symbols"), document.getElementById("val-log-symbols-img"),
"Используются недопустимые символы!", "Только буквы, цифры и символы @.+-_"));
login_val.set("len5", new ValidationData(document.getElementById("val-log-5"), document.getElementById("val-log-5-img"),
"Логин должен быть не менее 5-ти символов!", "Не более 5 символов"));
login_val.set("len150", new ValidationData(document.getElementById("val-log-150"), document.getElementById("val-log-150-img"),
"Логин должен быть меньше 150-ти символов!", "Не более 150 символов"));
login_val.set("log-pass", new ValidationData(document.getElementById("val-log-pass"), document.getElementById("val-log-pass-img"),
"Логин должен отличаться от пароля!", "Не cовпадает с паролем"));

let login_val_block = document.getElementById("validation-login")
login_val_block.hidden = true

let pass = document.getElementById("user-pass");
var pass_val = new Map();
pass_val.set("len8", new ValidationData(document.getElementById("val-pass-8"),document.getElementById("val-pass-8-img"),
"Пароль должен быть не менее 8-ми символов!", "Не менее 8-ми символов"));
pass_val.set("len25", new ValidationData(document.getElementById("val-pass-25"),document.getElementById("val-pass-25-img"),
"Пароль должен быть меньше 25-ти символов!", "Не превышает 25 символов"));
pass_val.set("symbols", new ValidationData(document.getElementById("val-pass-symbols"),document.getElementById("val-pass-symbols-img"),
"Пароль должен включать минимум один не цифровой символ!", "Не состоит только из цифр"));
pass_val.set("pass-log", new ValidationData(document.getElementById("val-pass-pass2"), document.getElementById("val-pass-pass2-img"),
"Логин должен отличаться от логина!", "Не cовпадает с логином"));

let pass_val_block = document.getElementById("validation-pass")
pass_val_block.hidden = true

login.addEventListener('input', function(){
    getGreen(login_val);
    pass_val.get("pass-log").set_success();
    if (!/^([A-я]|[A-z]|\d|@|\.|\+|-|_)*$/.test(login.value)) {
      login.style.borderColor = "red";
      login.style.color = "red";
      login_val.get("symbols").set_err();
    }
    else {
      login.style.borderColor = "";
      login.style.color = "black";
    }
    if ((login.value.length < 5) && (login.value != "")){
      login_val.get("len5").set_err();
    }
    if (login.value.length > 150){
      login_val.get("len150").set_err();
    }
    if ((login.value == pass.value) && (login.value != "")) {
      login_val.get("log-pass").set_err();
      pass_val.get("pass-log").set_err();
    }
    
    
  })

  login.onblur = function() {
    login_val_block.hidden = true
  };
  
  login.onfocus = function() {
    login_val_block.hidden = false
  };
  

pass.addEventListener('input', function(){
    getGreen(pass_val);
    login_val.get("log-pass").set_success();
    if ((!/^.*\D.*$/.test(pass.value))&& (pass.value != "")) {
      pass.style.borderColor = "red";
      pass.style.color = "red";
      pass_val.get("symbols").set_err();
    }
    else {
      pass.style.borderColor = "";
      pass.style.color = "black";
    }
  
    if ((pass.value.length < 8) && (pass.value != "")){
      pass_val.get("len8").set_err();
    }
    if (pass.value.length > 25){
      pass_val.get("len25").set_err();
    }
    if ((login.value == pass.value) && (login.value != "")) {
      pass_val.get("pass-log").set_err();
      login_val.get("log-pass").set_err();
    }
  })
  pass.onblur = function() {
    pass_val_block.hidden = true
  };
  
  pass.onfocus = function() {
    pass_val_block.hidden = false
  };
  

  /*DnD*/
  let login_window_close = document.getElementById("login-page-close")
  let overlay = document.getElementById("overlay")
  let login_window = document.getElementById("login-page")
  let open_login_window = document.getElementById("open_login_window")
  let start_left = login_window.style.left
  let start_top = login_window.style.top

 open_login_window.onmousedown = function(event) {
    
    overlay.classList.add("overlay")
    overlay.hidden = false 
    login_window.classList.add("login-page")
    login_window.hidden = false
 }
 
 login_window_close.onmousedown = function(event){
    login.value = ""
    pass.value = ""
    login_window.style.left = start_left
    login_window.style.top = start_top
    overlay.classList.remove("overlay")
    overlay.hidden = true 
    login_window.classList.remove("login-page")
    login_window.hidden = true
    login_window.onmouseup = null;
}


  login_window.onmousedown = function(event) {
    let elementsBelow = document.querySelectorAll( ":hover" );
    if (elementsBelow.length > 4){
        if (elementsBelow[4] == login_window_close){
            overlay.classList.remove("overlay")
            overlay.hidden = true 
            login_window.classList.remove("login-page")
            login_window.hidden = true
            login_window.onmouseup = null;
            return
        }
    }
    
    let shiftX = event.clientX - login_window.getBoundingClientRect().left;
    let shiftY = event.clientY - login_window.getBoundingClientRect().top;
  
    login_window.style.position = 'absolute';
    login_window.style.zIndex = 1000;
    document.body.append(login_window);
  
    moveAt(event.pageX, event.pageY);
  
    // переносит окно на координаты (pageX, pageY),
    // дополнительно учитывая изначальный сдвиг относительно указателя мыши
    function moveAt(pageX, pageY) {
        login_window.style.left = pageX - shiftX + 'px';
        login_window.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // передвигаем окно при событии mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // отпустить окно, удалить ненужные обработчики
    login_window.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      login_window.onmouseup = null;
    };

    
  
  };
  
  window.ondragstart = function() {
    return false;
  };

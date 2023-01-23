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


let checkbox = document.getElementById("user-checkbox");
let btn = document.getElementById("btn")


checkbox.addEventListener('change', function() {
  if (this.checked) {
    btn.removeAttribute('disabled');
    btn.style = "user-post";
  } else {
    btn.setAttribute('disabled', true);
    btn.style.background = "gray";
  }
});

let username = document.getElementById("user-name");
let secondname = document.getElementById("user-secondname");

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

let email = document.getElementById("user-email");

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

let pass2 = document.getElementById("user-pass-2");
var pass2_val = new Map();
pass2_val.set("len8", new ValidationData(document.getElementById("val-pass2-8"),document.getElementById("val-pass2-8-img"),
"Пароль должен быть не менее 8-ми символов!", "Не менее 8-ми символов"));
pass2_val.set("len25", new ValidationData(document.getElementById("val-pass2-25"),document.getElementById("val-pass2-25-img"),
"Пароль должен быть меньше 25-ти символов!", "Не превышает 25 символов"));
pass2_val.set("symbols", new ValidationData(document.getElementById("val-pass2-symbols"),document.getElementById("val-pass2-symbols-img"),
"Пароль должен включать минимум один не цифровой символ!", "Не состоит только из цифр"));
pass2_val.set("pass2-pass", new ValidationData(document.getElementById("val-pass2-pass"), document.getElementById("val-pass2-pass-img"),
"Пароли не совпадают!", "Пароли совпадают"));

function getGreen(map){
  for (var [key, value] of map) {
    value.set_success();
  }
}



username.addEventListener('input', function(){
  if (!/^([A-я]|[A-z]|\s|-)*$/.test(username.value)) {
      username.style.borderColor = "red";
      username.style.color = "red";
  }
  else {
    username.style.borderColor = "";
    username.style.color = "black";
  }
})

secondname.addEventListener('input', function(){
  if (!/^([A-я]|[A-z]|\s|-)*$/.test(secondname.value)) {
    secondname.style.borderColor = "red";
    secondname.style.color = "red";
  }
  else {
    secondname.style.borderColor = "";
    secondname.style.color = "black";
  }
})

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

email.addEventListener('input', function(){
  if ((!/^([A-z]|\d|_|-)+@(mail|gmail|yandex)\.(ru|net)$/.test(email.value)) && (email.value != "")) {
    email.style.borderColor = "red";
    email.style.color = "red";
  }
  else {
    email.style.borderColor = "";
    email.style.color = "black";
  }
})

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



pass2.addEventListener('input', function(){
  getGreen(pass2_val);
  if ((!/^.*\D.*$/.test(pass2.value))&& (pass2.value != "")) {
    pass2.style.borderColor = "red";
    pass2.style.color = "red";
    pass2_val.get("symbols").set_err();
  }
  else {
    pass2.style.borderColor = "";
    pass2.style.color = "black";
  }

  
  if ((pass2.value.length < 8) && (pass2.value != "")){
    pass2_val.get("len8").set_err();
  }
  if (pass2.value.length > 25){
    pass2_val.get("len25").set_err();
  }
  if ((pass2.value != pass.value) && (pass2.value != "")) {
    pass2_val.get("pass2-pass").set_err();
  }
})

function validateMyForm(){
  if ((login.value == pass.value) && (login.value != "")){
    alert("Ошибка! Логин не может быть равен паролю!")
    returnToPreviousPage();
    return false;
  }
  if (pass.value != pass2.value) {
    alert("Ошибка! пароли не совпадают!")
    returnToPreviousPage();
    return false;
  }
  return true;
}
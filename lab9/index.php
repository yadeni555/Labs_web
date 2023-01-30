<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="post_table.css">
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="modal.css">
    <link rel="stylesheet" href="adaptive.css">
    <title>№8</title>
</head>
<body>
    <?
        include ("./php/Controller/Main.php")
    ?>
    <div id="app">
    <header>
        <img src="./material/BlogLogo.png" alt="">
        <div class="burger">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>
        <div class="ssilka">
            <a href="#user" class="user">
                <img src="./material/Profile.png" alt="">
                <span>Войти</span>
            </a>
            <a href="#" class="exit">Зарегистрироваться</a>
        </div>
    </header>
    <main>
        <div class="background_modal">
            <div class="window" id="window">
                <div class="header-modal" id="header-modal">
                    <h1>Вход</h1>
                    <button class="x">
                        <img src="./material/Close Icon.png" alt="">
                    </button>
                </div>
                <div class="main-modal">
                    <form action="" class="form-login-modal" method="post">
                        <div class="input log">
                            <label for="login">Логин*</label>
                            <input type="text" id="login">
                        </div>
                        <div class="input password-input">
                            <label for="pass">Пароль</label>
                            <input type="password" name="password" id="pass">
                        </div>
                        <div class="info-block">
                            <button type="submit">Войти</button>
                            <a href="#" class="query_pass">Забыли пароль?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="h3">
            Последние публикации
        </div>
        <div class="tabel">
            <ul class="post-list"> View_post.php
                <? require './PHP/View/View_post.php'?>
                <div class="btn">
                    <button class="btn-more">Загрузить ещё 6</button>
                </div>
            </ul>
            <ul class="category-list">
                <h4>Рубрики</h4>
                <? require './PHP/View/View.php'?>
            </ul>
            
        </div>
    </main>
    <footer>
        <div class="ssilka_foot">
            <a href="#" class="foot-a">Об авторе</a>
            <a href="#" class="foot-a">Технологии</a>
        </div>
        <div class="foot-text">
            © Blog, 2022
        </div>
    </footer>
</div>
    <script src="./vue.min.js"></script>
    <script src="./axios.min.js"></script>
    <script src="./axios.min.js.map"></script>
    <script src="Drag_and_Drop.js"></script>
</body>
</html>
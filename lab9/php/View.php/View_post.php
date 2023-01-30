<?php
    foreach ($posts as $post) {
        $categores = Post::getCategorybyPost($post["post_id"]);
    ?>
        <div class="Post">
            <img class="Post-img" src="<?= $post["image"]?>" alt="" >
            <div class="Post-content">
                <div class="decription">
                    <h2> <?= $post["title"]?></h2>
                    <p><?= $post["short_text"]?></p>
                </div>
                <div class="Labels">
                    <?php
                    foreach ($categores as $iteam) {
                    ?>
                    <label  class="Post-teg">
                            <span><?= $iteam["titel"]?></span>
                    </label>
                </div>
            </div>
        </div>
<?php
    }
?>
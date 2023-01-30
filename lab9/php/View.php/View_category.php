<?php
    foreach ($categories as $category) {
?>
    <li class="iteam-cat">
        <a  href="/<?= $category["url"]?>" class="category"><?= $category["titel"]?></a>
    </li>
<?php
    }
?>
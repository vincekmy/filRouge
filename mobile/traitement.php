<?php





$name = trim($_post['name']);
$verif = '/^[a-z] [a-z0-9_-]{2, }/i';
    if (preg_match($verif, $name)== 0) {
        echo '<p>Adresse mail non valide !</p>';
    }
?>
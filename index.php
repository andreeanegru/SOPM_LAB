
<?php
// Pagini permise pentru includere
$allowed = ['compatibilitati','test','ghicitoare','contact'];

// Verifică dacă parametrul ?page este valid, altfel folosește "compatibilitati"
$page = isset($_GET['page']) && in_array($_GET['page'], $allowed) ? $_GET['page'] : 'compatibilitati';

// Funcție pentru a marca butonul activ din meniu
function isActive($p, $page){ 
  return $p === $page ? 'active' : ''; 
}
?>
<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Zodii Colorate</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">
</head>
<body data-page="<?= htmlspecialchars($page, ENT_QUOTES) ?>">

<header>
  <h1>Zodii Colorate 🌟</h1>
  <nav>
    <a class="<?= isActive('compatibilitati', $page) ?>" href="?page=compatibilitati">Compatibilități</a>
    <a class="<?= isActive('test', $page) ?>" href="?page=test">Test Personalitate</a>
    <a class="<?= isActive('ghicitoare', $page) ?>" href="?page=ghicitoare">Ghicitoarea Zilei</a>
    <a class="<?= isActive('contact', $page) ?>" href="?page=contact">Contact</a>
  </nav>
</header>

<main>
  <?php include __DIR__ . "/pages/{$page}.php"; ?>
</main>

<script src="assets/js/app.js"></script>
</body>
</html>
```

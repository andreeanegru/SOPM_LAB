<?php
$zodii = [
    "Berbec", "Taur", "Gemeni", "Rac", "Leu", "Fecioară",
    "Balanță", "Scorpion", "Săgetător", "Capricorn", "Vărsător", "Pești"
];

// Matrice compatibilitate cu mesaje unice
$compatibilitati = [];
foreach($zodii as $z1) {
    foreach($zodii as $z2) {
        $compatibilitati[$z1][$z2] = "Această combinație cosmică între $z1 și $z2 aduce o energie surprinzătoare și astrală, care poate să te uimească!";
    }
}

// Mesaje crazy astrale (pentru extra unicitate)
$crazy = [
    "S-ar putea să comunicați telepatic într-o noapte cu lună plină!",
    "Energia voastră combinată poate să transforme cafeaua în curcubeu!",
    "Este posibil să simțiți vibrații cosmice ciudate în jurul vostru!",
    "Un mic tornado de surprize astrale vă înconjoară când sunteți împreună!",
    "Compatibilitatea voastră poate să creeze eclipse emoționale!"
];

// Factor ziua nașterii
function factorZi($zi) {
    $mesajeZi = [];
    for ($i=1;$i<=31;$i++) {
        $mesajeZi[$i] = "energia zilei $i aduce vibrații speciale și surprize neașteptate";
    }
    return $mesajeZi[$zi] ?? "energie misterioasă și astrală";
}

// Funcție de generare
function genereazaCompatibilitate($zodie1, $zi1, $zodie2, $zi2, $compatibilitati, $crazy) {
    $textZodii = $compatibilitati[$zodie1][$zodie2] ?? "O combinație cosmică surprinzătoare.";
    $factor1 = factorZi($zi1);
    $factor2 = factorZi($zi2);
    $crazy_random = $crazy[array_rand($crazy)];

    return "<strong>$zodie1 ($zi1)</strong> și <strong>$zodie2 ($zi2)</strong>: $textZodii 
    Ziua $zi1 aduce <em>$factor1</em>, iar ziua $zi2 aduce <em>$factor2</em>. 
    Atenție, $crazy_random";
}

$rezultat = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $zodie1 = $_POST['zodie1'] ?? "";
    $zodie2 = $_POST['zodie2'] ?? "";
    $zi1 = intval($_POST['zi1'] ?? 0);
    $zi2 = intval($_POST['zi2'] ?? 0);

    if ($zodie1 && $zodie2 && $zi1 && $zi2) {
        $rezultat = genereazaCompatibilitate($zodie1, $zi1, $zodie2, $zi2, $compatibilitati, $crazy);
    } else {
        $rezultat = "Te rog să alegi toate zodiile și zilele!";
    }
}
?>

<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <title>Compatibilități Zodii Astrale</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; }
        select, button { font-size: 16px; padding: 8px; margin: 10px 0; }
        .rezultat { margin-top: 20px; padding: 15px; border: 1px solid #ccc; background: #f9f9f9; border-radius: 8px; }
        h1 { color: #6a0dad; }
    </style>
</head>
<body>
    <h1>Compatibilități Zodii Astrale 🌌</h1>
    <form method="post">
        <label for="zodie1">Alege prima zodie:</label><br>
        <select name="zodie1" id="zodie1">
            <option value="">-- Selectează --</option>
            <?php foreach($zodii as $z): ?>
                <option value="<?= $z ?>"><?= $z ?></option>
            <?php endforeach; ?>
        </select>
        <select name="zi1" id="zi1">
            <option value="">Ziua</option>
            <?php for($i=1;$i<=31;$i++): ?>
                <option value="<?= $i ?>"><?= $i ?></option>
            <?php endfor; ?>
        </select><br>

        <label for="zodie2">Alege a doua zodie:</label><br>
        <select name="zodie2" id="zodie2">
            <option value="">-- Selectează --</option>
            <?php foreach($zodii as $z): ?>
                <option value="<?= $z ?>"><?= $z ?></option>
            <?php endforeach; ?>
        </select>
        <select name="zi2" id="zi2">
            <option value="">Ziua</option>
            <?php for($i=1;$i<=31;$i++): ?>
                <option value="<?= $i ?>"><?= $i ?></option>
            <?php endfor; ?>
        </select><br>

        <button type="submit">Generează compatibilitate</button>
    </form>

    <?php if($rezultat): ?>
        <div class="rezultat"><?= $rezultat ?></div>
    <?php endif; ?>
</body>
</html>

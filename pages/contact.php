<!DOCTYPE html>
<html lang="ro">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact — Zodii Colorate</title>
  <style>
    body {
      font-family: Inter, system-ui, "Helvetica Neue", Arial;
      margin:0;
      padding:24px;
      background: #fff;
      color: #333;
    }
    .contact-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 0 12px;
    }
    h2 {
      font-size: 28px;
      color: #6a2d8b;
      margin-bottom: 8px;
    }
    .info {
      margin-bottom: 24px;
    }
    .info p {
      margin: 4px 0;
    }
    .map-wrapper {
      width: 100%;
      height: 300px;
      border-radius: 12px;
      overflow: hidden;
      margin-bottom: 24px;
    }
    form {
      background: #f7f0fa;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 6px 18px rgba(110,40,120,0.15);
    }
    form .field {
      margin-bottom: 16px;
    }
    form label {
      display:block;
      margin-bottom:6px;
      color:#4b2b4b;
      font-weight:600;
    }
    form input[type="text"],
    form input[type="email"],
    form textarea {
      width:100%;
      padding:12px 14px;
      border-radius:10px;
      border:1px solid rgba(0,0,0,0.1);
      font-size:15px;
      resize:vertical;
    }
    form button {
      background: linear-gradient(90deg,#ffb4c4,#c98de3);
      color:#fff;
      padding:12px 20px;
      font-size:16px;
      font-weight:600;
      border:none;
      border-radius:10px;
      cursor:pointer;
    }
    @media (max-width:600px) {
      h2 { font-size:24px; }
    }
  </style>
</head>
<body>
  <div class="contact-container">
    <h2>Contactează-ne & Găseşte-ne</h2>
    <div class="info">
      <p><strong>Telefon:</strong> <a href="tel:+40722354721">0722 354 721</a></p>
      <p><strong>Adresă:</strong> Corpul N, Strada Politehnicii 1, Brașov 500024</p>
    </div>

    <div class="map-wrapper">
      <iframe
        src="https://www.google.com/maps?q=Strada+Politehnicii+1+Bra%C8%99ov+500024&output=embed"
        width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

    <h3>Formular de contact</h3>
    <form action="#" method="POST">
      <div class="field">
        <label for="name">Nume *</label>
        <input type="text" id="name" name="name" required>
      </div>
      <div class="field">
        <label for="email">Email *</label>
        <input type="email" id="email" name="email" required>
      </div>
      <div class="field">
        <label for="phone">Telefon (opţional)</label>
        <input type="text" id="phone" name="phone">
      </div>
      <div class="field">
        <label for="message">Mesaj *</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      <button type="submit">Trimite mesaj</button>
    </form>
  </div>
</body>
</html>

let player = {
  hp: 100,
  damage: 15
};

let enemy = {
  hp: 50,
  damage: 10
};

function updateUI() {
  document.getElementById("playerHp").innerText = player.hp;
  document.getElementById("enemyHp").innerText = enemy.hp;
}

function log(text) {
  document.getElementById("log").innerHTML += `<p>${text}</p>`;
}

function attack() {
  enemy.hp -= player.damage;
  log("👊 Düşmana saldırdın!");

  if (enemy.hp <= 0) {
    log("🎉 Düşmanı yendin!");
    disableButtons();
    return;
  }

  player.hp -= enemy.damage;
  log("💥 Düşman sana vurdu!");

  if (player.hp <= 0) {
    log("☠️ Kaybettin!");
    disableButtons();
  }

  updateUI();
}

function run() {
  log("🏃 Kaçtın!");
  disableButtons();
}

function disableButtons() {
  document.querySelectorAll("button").forEach(btn => btn.disabled = true);
}

updateUI();

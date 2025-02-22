const btnJempol = document.getElementById('jempol');
const btnTelunjuk = document.getElementById('telunjuk');
const btnKelingking = document.getElementById('kelingking');
const btnReset = document.getElementById('reset');

const images = [
  '/assets/jempol.jpg',
  '/assets/telunjuk.jpg',
  '/assets/kelingking.jpg',
];

const scores = {
  menang: localStorage.getItem('menang')
    ? parseInt(localStorage.getItem('menang'))
    : 0,
  seri: localStorage.getItem('seri')
    ? parseInt(localStorage.getItem('seri'))
    : 0,
  kalah: localStorage.getItem('kalah')
    ? parseInt(localStorage.getItem('kalah'))
    : 0,
};

function updateResult(result) {
  document.getElementById('result').textContent = result;
}

function updateDisplay() {
  document.getElementById('menang').textContent = `Menang: ${scores.menang}`;
  document.getElementById('seri').textContent = `Seri: ${scores.seri}`;
  document.getElementById('kalah').textContent = `Kalah: ${scores.kalah}`;
}

function updateLocalStorage() {
  localStorage.setItem('menang', scores.menang);
  localStorage.setItem('seri', scores.seri);
  localStorage.setItem('kalah', scores.kalah);
}

function updateScores(result) {
  scores[result]++;
  updateDisplay();
  updateLocalStorage();
}

function setImages(playerImage, randomIndex) {
  document.getElementById('player').src = images[playerImage];
  document.getElementById('computer').src = images[randomIndex];
  document.getElementById('text-image').textContent =
    getChoiceName(playerImage);
  document.getElementById('text-image2').textContent =
    getChoiceName(randomIndex);
}

function getChoiceName(index) {
  return index === 0 ? 'Jempol' : index === 1 ? 'Telunjuk' : 'Kelingking';
}

function play(playerChoice, playerImage) {
  const randomIndex = Math.floor(Math.random() * images.length);
  setImages(playerImage, randomIndex);

  if (randomIndex === playerImage) {
    updateResult('Seri');
    updateScores('seri');
  } else if (
    (playerImage === 0 && randomIndex === 1) ||
    (playerImage === 1 && randomIndex === 2) ||
    (playerImage === 2 && randomIndex === 0)
  ) {
    updateResult('Menang');
    updateScores('menang');
  } else {
    updateResult('Kalah');
    updateScores('kalah');
  }
}

btnJempol.addEventListener('click', () => play('Jempol', 0));
btnTelunjuk.addEventListener('click', () => play('Telunjuk', 1));
btnKelingking.addEventListener('click', () => play('Kelingking', 2));

btnReset.addEventListener('click', () => {
  scores.menang = 0;
  scores.seri = 0;
  scores.kalah = 0;
  updateDisplay();
  updateLocalStorage();
});

updateDisplay();

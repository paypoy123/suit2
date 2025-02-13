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

document.getElementById('menang').textContent = `Menang: ${scores.menang}`;
document.getElementById('seri').textContent = `Seri: ${scores.seri}`;
document.getElementById('kalah').textContent = `Kalah: ${scores.kalah}`;

function updateScores() {
  document.getElementById('menang').textContent = `Menang: ${scores.menang}`;
  document.getElementById('seri').textContent = `Seri: ${scores.seri}`;
  document.getElementById('kalah').textContent = `Kalah: ${scores.kalah}`;
  localStorage.setItem('menang', scores.menang);
  localStorage.setItem('seri', scores.seri);
  localStorage.setItem('kalah', scores.kalah);
}

function play(playerChoice, playerImage) {
  const randomIndex = Math.floor(Math.random() * images.length);

  document.getElementById('player').src = images[playerImage];
  document.getElementById('computer').src = images[randomIndex];
  const textImage = document.getElementById('text-image');
  textImage.textContent = playerChoice;
  const textImage2 = document.getElementById('text-image2');
  textImage2.textContent =
    randomIndex === 0
      ? 'Jempol'
      : randomIndex === 1
      ? 'Telunjuk'
      : 'Kelingking';

  if (randomIndex === playerImage) {
    document.getElementById('result').textContent = 'Seri';
    scores.seri++;
  } else if (
    (playerImage === 0 && randomIndex === 1) ||
    (playerImage === 1 && randomIndex === 2) ||
    (playerImage === 2 && randomIndex === 0)
  ) {
    document.getElementById('result').textContent = 'Menang';
    scores.menang++;
  } else {
    document.getElementById('result').textContent = 'Kalah';
    scores.kalah++;
  }

  updateScores();
}

btnJempol.addEventListener('click', () => play('Jempol', 0));
btnTelunjuk.addEventListener('click', () => play('Telunjuk', 1));
btnKelingking.addEventListener('click', () => play('Kelingking', 2));

btnReset.addEventListener('click', () => {
  scores.menang = 0;
  scores.seri = 0;
  scores.kalah = 0;
  updateScores();
});

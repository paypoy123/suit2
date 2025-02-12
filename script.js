const btnJempol = document.getElementById('jempol');
const btnTelunjuk = document.getElementById('telunjuk');
const btnKelingking = document.getElementById('kelingking');
const btnReset = document.getElementById('reset');

const images = [
  '/assets/jempol.jpg',
  '/assets/telunjuk.jpg',
  '/assets/kelingking.jpg',
];

let menang = 0;
let seri = 0;
let kalah = 0;

btnJempol.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * images.length);

  document.getElementById('player').src = images[0];
  document.getElementById('computer').src = images[randomIndex];
  const textImage = document.getElementById('text-image');
  textImage.textContent = 'Jempol';
  const textImage2 = document.getElementById('text-image2');
  textImage2.textContent =
    randomIndex === 0
      ? 'Jempol'
      : randomIndex === 1
      ? 'Telunjuk'
      : 'Kelingking';

  if (randomIndex === 0) {
    document.getElementById('result').textContent = 'Seri';
    seri++;
    document.getElementById('seri').textContent = `Seri: ${seri}`;
  } else if (randomIndex === 1) {
    document.getElementById('result').textContent = 'Menang';
    menang++;
    document.getElementById('menang').textContent = `Menang: ${menang}`;
  } else {
    document.getElementById('result').textContent = 'Kalah';
    kalah++;
    document.getElementById('kalah').textContent = `Kalah: ${kalah}`;
  }
});

btnTelunjuk.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * images.length);

  document.getElementById('player').src = images[1];
  document.getElementById('computer').src = images[randomIndex];
  const textImage = document.getElementById('text-image');
  textImage.textContent = 'Telunjuk';
  const textImage2 = document.getElementById('text-image2');
  textImage2.textContent =
    randomIndex === 0
      ? 'Jempol'
      : randomIndex === 1
      ? 'Telunjuk'
      : 'Kelingking';

  if (randomIndex === 0) {
    document.getElementById('result').textContent = 'Kalah';
    kalah++;
    document.getElementById('kalah').textContent = `Kalah: ${kalah}`;
  } else if (randomIndex === 1) {
    document.getElementById('result').textContent = 'Seri';
    seri++;
    document.getElementById('seri').textContent = `Seri: ${seri}`;
  } else {
    document.getElementById('result').textContent = 'Menang';
    menang++;
    document.getElementById('menang').textContent = `Menang: ${menang}`;
  }
});

btnKelingking.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * images.length);

  document.getElementById('player').src = images[2];
  document.getElementById('computer').src = images[randomIndex];
  const textImage = document.getElementById('text-image');
  textImage.textContent = 'Kelingking';
  const textImage2 = document.getElementById('text-image2');
  textImage2.textContent =
    randomIndex === 0
      ? 'Jempol'
      : randomIndex === 1
      ? 'Telunjuk'
      : 'Kelingking';

  if (randomIndex === 0) {
    document.getElementById('result').textContent = 'Menang';
    menang++;
    document.getElementById('menang').textContent = `Menang: ${menang}`;
  } else if (randomIndex === 1) {
    document.getElementById('result').textContent = 'Kalah';
    kalah++;
    document.getElementById('kalah').textContent = `Kalah: ${kalah}`;
  } else {
    document.getElementById('result').textContent = 'Seri';
    seri++;
    document.getElementById('seri').textContent = `Seri: ${seri}`;
  }
});

btnReset.addEventListener('click', () => {
  menang = 0;
  seri = 0;
  kalah = 0;
  document.getElementById('menang').textContent = `Menang: ${menang}`;
  document.getElementById('seri').textContent = `Seri: ${seri}`;
  document.getElementById('kalah').textContent = `Kalah: ${kalah}`;
});

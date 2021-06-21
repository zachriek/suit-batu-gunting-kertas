// Suit Batu Gunting Kertas
// PILIHAN COMPUTER
function getPilihanComputer() {
	const comp = Math.random();
	if (comp < 0.34) return 'batu';
	if (comp >= 0.34 && comp < 0.67) return 'gunting';
	return 'kertas';
}

// HASIL
function getHasil(comp, player) {
	if (player == comp) return 'SERI';
	if (player == 'batu') return (comp == 'gunting') ? 'MENANG' : 'KALAH';
	if (player == 'gunting') return (comp == 'batu') ? 'KALAH' : 'MENANG';
	if (player == 'kertas') return (comp == 'gunting') ? 'KALAH' : 'MENANG';
}

// GAMBAR GANTI-GANTI
function putar() {
	const imgComputer = document.querySelector('.computer-img');
	const gambar = ['batu', 'kertas', 'gunting'];

	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function () {
		if (new Date().getTime() - waktuMulai > 2000) {
			clearInterval;
			return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
		if (i == gambar.length) i = 0;
	}, 100)

	setInterval(function () {
		if (new Date().getTime() - waktuMulai > 3000) {
			clearInterval;
			return;
		}
		blockDisplay.style.display = 'block';
	}, 100)
}

// JALANKAN GAME
function turnOn(e) {
	if (e.target.className == 'batu' || e.target.className == 'gunting' || e.target.className == 'kertas') {
		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = e.target.className;
		const hasil = getHasil(pilihanComputer, pilihanPlayer);

		putar();

		setTimeout(function () {
			const imgComputer = document.querySelector('.computer-img');
			imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

			result.innerHTML = hasil;

			const scoreText = document.querySelector('.score h4');
				if (hasil === 'MENANG') {
						score++;
						scoreText.innerHTML = `SCORE : ${score}`;
					} else if (hasil === 'KALAH') {
						score--;
						scoreText.innerHTML = `SCORE : ${score}`;
					}
		}, 2000);

		setTimeout(function() {
			blockDisplay.style.display = 'none';
			if (result.innerHTML == 'MENANG') resultsDisplay[0].style.display = 'flex';
			if (result.innerHTML == 'KALAH') resultsDisplay[1].style.display = 'flex';
		}, 3000);
	}
}

// MENGHAPUS TAMPILAN MENANG ATAU KALAH
function removeResultDisplay() {
	this.style.display = 'none';
}

// EVENT CLICK / VARIABLE
let score = 0;
const playerArea = document.querySelector('.player-area');
const blockDisplay = document.querySelector('.block-display');
const result = document.querySelector('.result');
const resultsDisplay = document.querySelectorAll('.display');
playerArea.addEventListener('click', turnOn);
resultsDisplay.forEach(result => result.addEventListener('click', removeResultDisplay));

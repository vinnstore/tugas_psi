function tampilkanHasil() {
    const nama = document.getElementById('nama').value;
    const hasil = document.getElementById('hasil');

    if (nama) {
        hasil.innerHTML = `Anda Memesan: ${nama}`;
        hasil.style.display = 'block';
    } else {
        hasil.innerHTML = 'Silakan masukkan menu yang di pilih!';
        hasil.style.display = 'block';
    }
}
// Mendapatkan elemen
const popup = document.getElementById('popup');
const popupOverlay = document.getElementById('popupOverlay');
const closePopup = document.getElementById('closePopup');

// Fungsi untuk menampilkan popup
function showPopup() {
    popup.style.display = 'block';
    popupOverlay.style.display = 'block';
}

// Fungsi untuk menutup popup
function closePopupFunction() {
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
}

// Menambahkan event listener ke link
document.getElementById('link1').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah navigasi
    showPopup();
});

// Menambahkan event listener ke tombol tutup
closePopup.addEventListener('click', closePopupFunction);

// Menambahkan event listener ke overlay untuk menutup popup saat diklik
popupOverlay.addEventListener('click', closePopupFunction);

document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.getElementById('checkbox');
    const body = document.body;

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
        }else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
        }
    });

    body.classList.add('alight-mode');
});
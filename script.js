// Komputer memilih angka acak 1-100
let angkaRahasia = Math.floor(Math.random() * 100) + 1;

// Menghitung jumlah percobaan
let percobaan = 0;

// Fungsi saat tombol ditekan
function cekTebakan() {

    let tebakan = Number(document.getElementById("tebakan").value);

    percobaan++;

    if (tebakan === angkaRahasia) {
        document.getElementById("hasil").textContent =
            "🎉 Selamat! Tebakan kamu benar!";
    } 
    else if (tebakan < angkaRahasia) {
        document.getElementById("hasil").textContent =
            "📈 Terlalu kecil!";
    } 
    else {
        document.getElementById("hasil").textContent =
            "📉 Terlalu besar!";
    }

    document.getElementById("percobaan").textContent =
        "Percobaan: " + percobaan;
}
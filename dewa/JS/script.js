function navigasi(action) {
    if (action === 'luas') {
        window.location.href = "hitung-luas.html";
    } else if (action === 'keliling') {
        window.location.href = "hitung-keliling.html";
    }
}

function hitungLuas() {
    var panjangSisi = parseFloat(document.getElementById("sisi").value);

    if (isNaN(panjangSisi)) {
        alert("Masukkan angka yang valid.");
        return;
    }

    var luas = panjangSisi * panjangSisi;
    document.getElementById("hasilll").textContent = "Hasil: ";
    document.getElementById("rumusText").textContent = "Rumus: L = S x S";
    document.getElementById("hasilText").textContent = "Luas = " + panjangSisi + " x " + panjangSisi + " = " + luas;
}

function hitungKeliling() {
    var panjangSisi = parseFloat(document.getElementById("sisi").value);

    if (isNaN(panjangSisi)) {
        alert("Masukkan angka yang valid.");
        return;
    }

    var keliling = 4 * panjangSisi;
    document.getElementById("hasilll").textContent = "Hasil: ";
    document.getElementById("rumusText").textContent = "Rumus: K = 4 x S";
    document.getElementById("hasilText").textContent = "Keliling = 4 x " + panjangSisi + " = " + keliling;
}

function resetForm() {
    document.getElementById("sisi").value = "";
    document.getElementById("hasilll").textContent = " ";
    document.getElementById("rumusText").textContent = "";
    document.getElementById("hasilText").textContent = "";
}

function logout(){
    if(confirm("Yakin mau Log out?")){
        window.close();
    }
    document.getElementById("logout").addEventListener("click", logout);

}

function navigateBack() {
    window.location.href = "index.html";
}

function updateWaktu() {
    const waktuFooter = document.getElementById("waktu");
    const sekarang = new Date();
    const jam = sekarang.getHours();
    const mnt = sekarang.getMinutes();
    const detk = sekarang.getSeconds();
    const waktu = `${jam}:${mnt}:${detk}`;
    waktuFooter.textContent = `Waktu: ${waktu}`;
}

setInterval(updateWaktu, 1000);

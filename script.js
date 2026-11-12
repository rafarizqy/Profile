// Menunggu sampai seluruh elemen HTML selesai dimuat
document.addEventListener('DOMContentLoaded', function() {
    // 1. Pilih tombol berdasarkan ID-nya
    const tombolSapa = document.getElementById('sapaButton');
    
    // Pastikan tombolnya ada sebelum pasang event listener
    if (tombolSapa) {
        // 2. Tambahkan 'event listener' untuk aksi 'click'
        tombolSapa.addEventListener('click', function() {
            // 3. Jalankan kode ini ketika tombol di-klik
            alert('Halo! Terima kasih sudah berkunjung!');
        });
    }
});

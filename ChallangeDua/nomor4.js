//Ini adalah kumpulan Objek Array dari data Penjualan Pak Aldi dengan berbagai properti di dalamnya
const dataPenjualanPakAldi = [
    {
        namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High',
        hargaSatuan: 360000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    }
]

/*Function ini akan menjalankan perulangan pada tiap objek array di atas dengan memeriksa setiap total terjual mulai dari index 0 samapai 3 pada masing-masing data array
lalu setiap total terjual masing-masing produk ditambahkan setelah itu didapatkan total semua produk yang terjual dari penjualan Pak Aldi
*/
function getTotalPenjualan(dataPenjualan) {
    let totalTerjual = 0;
    for (let h = 0; h < dataPenjualan.length; h++) {
        totalTerjual += dataPenjualan[h].totalTerjual;
    }
    return totalTerjual;
}

const totalTerjualSemuaProduk = getTotalPenjualan(dataPenjualanPakAldi);
console.log(`Total Terjual Semua Produk Toko Pak Aldi: ${totalTerjualSemuaProduk} \n Ini merupakan tipe data: ${typeof(totalTerjualSemuaProduk)} ----------^`);
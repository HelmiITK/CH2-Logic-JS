//Ini adalah kimpulan objek array yang di mana terdapat masing-masing properti di dalamnya dari index 0 sampai 3 
const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Basari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002942',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    }
]

function getInfoPenjualan(dataPenjualan) {
    let totalKeuntungan = 0; //Variabel totalKeuntunga dan totalModal dideklarasikan untuk menyimpan total keuntungan dan total modal awal dengan value yang diinisialisasikan sebagai 0   
    let totalModal = 0; 
    let produkBukuTerlaris = { namaProduk: '', totalTerjual: 0 }; //Variabel produkBukuTerlaris dan penulisTerlaris dideklarasikan untuk menyimpan informasi tentang buku dan keduanya diinisialisasikan sebagai objek kosong yang nantinya akan diisi ketika function dijalankan
    let penulisTerlaris = { penulis: '', totalTerjual: 0 };

    //Di dalam function ini terdapat perulangan yang di mana kita membuat variabel produk dengan mengambil dataPenjualan
    for (const produk of dataPenjualan) {
        const keuntunganPerProduk = (produk.hargaJual - produk.hargaBeli) * produk.totalTerjual; //melakukan pengurangan harga jual dan harga beli buku lalu di kali total terjual buku
        totalKeuntungan += keuntunganPerProduk; //terdapat operator assigment yang di mana total keuntungan akan ditambahkan dengan keuntungan per produk tiap kali perulangan ini dijalankan
        totalModal += produk.hargaBeli * produk.totalTerjual; 

        /*Terdapat pengkondisian di mana akan memeriksa apakah produk saat ini memiliki total terjual yang lebih besar daripada produk buku terlaris yang telah ditemukan sebelumnya
        Jika iya kita memperbarui informasi buku terlaris dengan nama produk dan total terjual produk saat ini
        */
        if (produk.totalTerjual > produkBukuTerlaris.totalTerjual) {
            produkBukuTerlaris = {
                namaProduk: produk.namaProduk,
                totalTerjual: produk.totalTerjual,
            };
        }
        // melakukan hal yg sama pada pengkondisian di atas
        if (produk.totalTerjual > penulisTerlaris.totalTerjual) {
            penulisTerlaris = {
                penulis: produk.penulis,
                totalTerjual: produk.totalTerjual, 
            };
        }
    }
    
    //persentase keuntungan dihitung dengan membagi totalKeuntungan dengan totalModal dan mengalikannya dengan 100 dan hasilnya akan disimpan pada variabel persentaseKeuntungan
    const persentaseKeuntungan = (totalKeuntungan / totalModal) * 100;

    return {
        totalKeuntungan,
        totalModal,
        produkBukuTerlaris,
        penulisTerlaris,
        persentaseKeuntungan,
    };
}

//function getInfoPenjualan mengembalikan objek yang berisi informasi yang telah dihitung, yaitu totalKeuntungan, totalModal, produkBukuTerlaris, penulisTerlaris, persentaseKeuntungan
const informasiPenjualan = getInfoPenjualan(dataPenjualanNovel);

console.log('Total Keuntungan: Rp. ' + informasiPenjualan.totalKeuntungan);
console.log('Total Modal: Rp. ' + informasiPenjualan.totalModal);
console.log('Produk Buku Terlaris: ' + informasiPenjualan.produkBukuTerlaris.namaProduk);
console.log('Penulis Buku Terlaris: ' + informasiPenjualan.penulisTerlaris.penulis);
console.log('Persentase Keuntungan: ' + informasiPenjualan.persentaseKeuntungan.toFixed(2) + '%'); //terdapat method toFixed yang berfungsi untuk mengembalikan angka yang ditulis dengan angka desimal atau float dan (2) maksudnya adalah kita ingin agar angka dibelakang koma sebanyak dua

//Pada function yang kita namakan getAngkaTerbesarKedua dengan parameternya, yaitu array, dengan memeriksa apakah data array setidaknya memiliki 2 angka di dalamnya
//Jika tidak dia akan mengembalikan pesan "Data angka setidaknya harus ada dua"
function getAngkaTerbesarKedua(array) {
    if (array.length < 2) {
        return "Data angka setidaknya harus ada dua";
    }

    //function ini brfungsi untuk menghapus duplikasi angka dalam array menggunakan method new Set(array) yang akan mengembalikan himpunan unik dari angka-angka dalam array
    //Setelah itu mengurutkan data array dari yang terbesar ke terkecil
    const dataUnik = [...new Set(array)].sort((a, b) => b - a);

    //terdapat sebuah kondisi dimana jika angka dalam array misal [2,2,2,2] dia akan mengembalikan pesan "Tidak ada data angka terbesar kedua dalam array ini"
    if (dataUnik.length < 2) {
        return "Tidak ada data angka terbesar kedua dalam array ini";
    }

    return dataUnik[1];
}

const dataArray1 = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataArray1));
console.log(typeof(getAngkaTerbesarKedua(dataArray1)));
console.log("--------------------------------")

// const dataArray2 = [9, 4, 7, 7, 4, 3, 2, 2, 8];
// console.log(getAngkaTerbesarKedua(0)); // Output ini error karena tidak memanggil variabel yang sudah kita deklarasi pada dataArray2 sehingga fungsi pada line 6 tidak dapat dijalankan

// const dataArray3 = [9, 4, 7, 7, 4, 3, 2, 2, 8];
// console.log(getAngkaTerbesarKedua()); // Output ini error karena function pada getAngkaTerbesarKedua tidak dapat membaca panjang dari sebuah array (banyak data)
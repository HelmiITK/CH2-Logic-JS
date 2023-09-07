//fungsi ini menjalankan sebuah statements di mana jika parameter ganjilOrgenap yang di mana si 2 habis dibagi 0
//maka kembalikan nilai genap dengan tipe data string, namun jika bukan maka kembalikan nilai ganjil dengan tipe data string.
const checkTypeNumber = (givenNumber) => {
    if (givenNumber % 2 === 0) {
        return "genap";
    }   else {
        return "ganjil";
    } 
}

//mendeklarasikan sebuah const nomor1 dengan nilai 9 dan nomor2 dengan nilai 6
const nomor1 = 9;
const nomor2 = 6;

//menjalankan fungsi yang sudah dibuat pada function tolongDiCekYahJS dengan blok if-else di dalamnya
console.log(nomor1 + " termasuk bilangan " + checkTypeNumber(nomor1)); //melakukan print dengan memanggil nomor1 lalu ditambahkan dengan operator tambah (+) dan memanggil function tolongDiCekYahJS dan memanggil nomor1 untuk melihat hasilnya genap atau ganjil
console.log(nomor2 + " termasuk bilangan " + checkTypeNumber(nomor2)); //melakukan print dengan memanggil nomor2 lalu ditambahkan dengan operator tambah (+) dan memanggil function tolongDiCekYahJS dan memanggil nomor2 untuk melihat hasilnya genap atau ganjil

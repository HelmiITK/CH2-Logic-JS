// Pada function ini akan mengubah dari parameter selectedText kemudain di ubah dengan parameter changeText dan mengembalikan
// nilai sebuah kalimat dengan kata yang sudah diubah 
function changeWord(selectedText, changeText, text) {
    const result = text.replace(selectedText, changeText);
    return result;
}

const kalimat1 = "Aku jadi lega kudengar kalau kamu sudah menikah, aku terlambat bilang suka kepadamu";
const kalimat2 = "Ku dengar kamupun sekarang punya anak, tak sanggup memanggilmu Farewell masa mudaku";

//mengubah kata lega dengan senang lalu melakukan deklarasi pada result1 kemudian menjalankan function di atas
const result1 = changeWord("lega", "senang", kalimat1);
console.log(result1);

//mengubah kata anak dengan uang lalu melakukan deklarasi pada result2 kemudian menjalankan function di atas
const result2 = changeWord("anak", "uang", kalimat2);
console.log(result2)
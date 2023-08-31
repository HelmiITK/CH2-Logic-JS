function changeWord(selectedText, changeText, text) {
    const result = text.replace(selectedText, changeText);
    return result;
}

const kalimat1 = "Aku jadi lega kudengar kalau kamu sudah menikah, aku terlambat bilang suka kepadamu";
const kalimat2 = "Ku dengar kamupun sekarang punya anak, tak sanggup memanggilmu Farewell masa mudaku";

const selectedText1 = "menikah"; // memilih kata menikah untuk diubah di state changeText1
const changeText1 = "Jualan Es batu"; // akan merubah kata menikah menjadi Jualan Es batu dari state selectedText1 

const selectedText2 = "anak";
const changeText2 = "uang";

const result1 = changeWord(selectedText1, changeText1, kalimat1); 
console.log(result1);

const result2 = changeWord(selectedText2, changeText2, kalimat2);
console.log(result2);

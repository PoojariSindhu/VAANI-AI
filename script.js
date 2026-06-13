const input =
document.getElementById("input");

const output =
document.querySelectorAll("textarea")[1];

const source =
document.getElementById("source");

const target =
document.querySelectorAll("select")[1];



// Translate

async function translateText() {

let text =
input.value.trim();

if (!text) {

alert("Enter text");

return;

}

let languageMap = {

English:"en",
Telugu:"te",
Hindi:"hi",
Tamil:"ta",
French:"fr",
Spanish:"es"

};

let sourceCode =
languageMap[source.value];

let targetCode =
languageMap[target.value];

try {

let response =
await fetch(

`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${sourceCode}|${targetCode}`

);

let data =
await response.json();

output.value =
data.responseData.translatedText;

}

catch {

output.value =
"Translation failed";

}

}



// Copy

function copyText(){

navigator.clipboard.writeText(
output.value
);

alert("Copied");

}



// Swap

function swapLanguage(){

let tempText =
input.value;

input.value =
output.value;

output.value =
tempText;

let tempLang =
source.value;

source.value =
target.value;

target.value =
tempLang;

}



// Clear

function clearText(){

input.value="";

output.value="";

}



// Buttons

document
.querySelector(".translate")
.addEventListener(
"click",
translateText
);

document
.querySelector(".copy")
.addEventListener(
"click",
copyText
);

document
.querySelector(".swap button")
.addEventListener(
"click",
swapLanguage
);
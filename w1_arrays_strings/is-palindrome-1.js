// Escribe un programa que verifique que una frase es un palíndromo.
// Un palíndromo es una frase que se lee igual de derecha a izquierda que de izquierda a derecha.

// UTILIZANDO API METHODS:

function cleanString(str) {
  let cleanedStr = str.toLowerCase().replace(/[\s|,|.|:|;]/g, "");

  if (!cleanedStr.match(/[áéíóú]/)) return cleanedStr;

  const stressedVowels = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
  };

  Object.keys(stressedVowels).forEach((vowel) => {
    if (cleanedStr.includes(vowel)) {
      const regex = new RegExp(vowel, "g");
      cleanedStr = cleanedStr.replace(regex, stressedVowels[vowel]);
    }
  });

  return cleanedStr;
}

function isPalindrome(str) {
  if (!str || typeof str !== "string") return false;

  const cleanedStr = cleanString(str);
  const reversedStr = cleanedStr.split("").reverse().join("");

  if (cleanedStr === reversedStr) {
    return true;
  }
  return false;
}

console.log("Es palíndromo:", isPalindrome("ojo"));
console.log("No es palíndromo:", isPalindrome("Claramente, esto no es un palíndromo"));
console.log("No hay input:", isPalindrome());
console.log("Input es empty string:", isPalindrome(""));
console.log("Input no es string:", isPalindrome(50));
console.log("Con espacios:", isPalindrome("Amad a la dama"));
console.log("Con puntuación:", isPalindrome("A ti no, bonita."));
console.log("Con tildes:", isPalindrome("La ruta nos aportó otro paso natural"));
console.log("Con todo:", isPalindrome("No lata, no: la totalidad arada dilato talón a talón."));

// Vowel counting

var str = prompt("Enter a string:");
str = str.toLowerCase();

function totalVowels() {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (
      str[i] == 'a' ||
      str[i] == 'e' ||
      str[i] == 'i' ||
      str[i] == 'o' ||
      str[i] == 'u'
    ) {
      count++;
    }
  }
  document.getElementById("output").innerText =
    "Total: " + count;
}

function countA() {
  countChar('a');
}

function countE() {
  countChar('e');
}

function countI() {
  countChar('i');
}

function countO() {
  countChar('o');
}

function countU() {
  countChar('u');
}

function countChar(ch) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i] == ch) {
      count++;
    }
  }
  document.getElementById("output").innerText =
    ch.toUpperCase() + ": " + count;
}

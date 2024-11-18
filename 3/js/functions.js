function checkLength(string, length) {
  return string.length <= length;
}

function checkPalindrom(string) {
  string = string.replaceAll(' ', '');
  string = string.toLowerCase();
  const string2 = string.split('').reverse().join('');
  return string === string2;
}

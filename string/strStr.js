function strStr(strA, strB) {
  if(!strA || !strB || !strA.length || !strB.length) {
    return -1;
  }
  if(strA.length === strB.length) {
    return strA === strB ? 0 : -1;
  }

  function isStrSubstring(largeStrIndex, largeStr, smallStr) {
    var subString = largeStr.slice(largeStrIndex, largeStrIndex + smallStr.length);
    return subString === smallStr;
  }

  // get small string and large string
  var smallStr = strB;
  var largeStr = strA;

  // iterate over large string and match first char
  // if 1st char matches, see if next n chars match small string
  var i = 0;
  var isSubstring = false;
  while(!isSubstring && i < (largeStr.length - smallStr.length)) {
    if(largeStr[i] === smallStr[0]) {
      isSubstring = isStrSubstring(i, largeStr, smallStr);
    }
    if(isSubstring) {
      return i;
    }
    i++;
  }
  return -1;
}

console.log(strStr('lmnop', 'no'));

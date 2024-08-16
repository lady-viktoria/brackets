module.export = function check(str, bracketsConfig) {
  function removeParentheses(s) {
    for (const subArr of bracketsConfig){
        s = s.split(subArr[0]+subArr[1]).join('');
    }
    return s;
  };
  var isValid = function (s) {
    let l = s.length;
    s = removeParentheses(s)
    while (l != s.length) {
        l = s.length;
        s = removeParentheses(s)
    }
    if (s.length == 0) {
        return true
    } else return false;
  };
  return isValid(str);
}




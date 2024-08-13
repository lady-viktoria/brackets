module.exports = function check(str, bracketsConfig) {
  function removeParentheses(s) {
    s = s.split('{}').join('');
    s = s.split('[]').join('');
    s = s.split('()').join('');
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

    console.log(s);
};
}

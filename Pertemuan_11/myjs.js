var hasil = 0;
var operator = "";
var penandahasil = false;
$(function () {
  $(".tombol input").click(function () {
    var before = $(".display input").val();
    var beforeFloat = parseFloat(before);
    var lastchar = before.substr(before.length - 1);

    var res = "";
    switch (this.value) {
      case "c":
        hasil = 0;
        operator = "";
        break;
      case ".":
        if (before.length == 0 || penandahasil) {
          res = 0 + this.value;
        } else {
          res = before;
          if (isNaN(parseInt(lastchar))) {
            if (lastchar != ".") res = before + 0 + this.value;
          } else if (Number.isInteger(beforeFloat)) res = before + this.value;
        }
        penandahasil = false;
        break;
      case "+":
      case "-":
      case "*":
      case "/":
      case "=":
        res = do_operant(before, beforeFloat, this.value);
        break;
      default:
        if (penandahasil) {
          res += this.value;
          penandahasil = false;
        } else res = before + this.value;
    }
    $(".display input").val(res);
  });
});
function do_operant(before, beforeFloat, value) {
  if (before.length > 0 && !penandahasil) {
    switch (operator) {
      case "-":
        hasil -= beforeFloat;
        break;
      case "*":
        hasil *= beforeFloat;
        break;
      case "/":
        hasil /= beforeFloat;
        break;
      default:
        hasil += beforeFloat;
        break;
    }
  }
  operator = value;
  penandahasil = true;
  return hasil;
}

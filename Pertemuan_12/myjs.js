var playerO = false;
var game = false;
var countAll = 0;
$(function () {
  $(".tombol input").click(function () {
    if (this.value.length == 0) {
      if (!playerO) {
        this.value = "O";
      } else {
        this.value = "X";
      }
      playerO = !playerO;
    }
    var classAll = this.className.split(" ");
    countAll = 0;
    $("." + classAll[0]).each(cekval);
    if (!cekwin()) {
      countAll = 0;
      $("." + classAll[1]).each(cekval);
      if (!cekwin()) {
        countAll = 0;
        if (classAll[0].substr(1) == classAll[1].substr(1)) {
          if (playerO) {
            if ($("#1-1").val() == "O") countAll++;
            if ($("#2-2").val() == "O") countAll++;
            if ($("#3-3").val() == "O") countAll++;
          } else {
            if ($("#1-1").val() == "X") countAll++;
            if ($("#2-2").val() == "X") countAll++;
            if ($("#3-3").val() == "X") countAll++;
          }
        }
        if (!cekwin()) {
          countAll = 0;
          if (this.id == "3-1" || this.id == "2-2" || this.id == "1-3") {
            if (playerO) {
              if ($("#3-1").val() == "O") countAll++;
              if ($("#2-2").val() == "O") countAll++;
              if ($("#1-3").val() == "O") countAll++;
            } else {
              if ($("#3-1").val() == "X") countAll++;
              if ($("#2-2").val() == "X") countAll++;
              if ($("#1-3").val() == "X") countAll++;
            }
          }
          cekwin();
        }
      }
    }
  });
});
function cekval() {
  if (playerO) {
    if (this.value == "O") countAll++;
  } else {
    if (this.value == "X") countAll++;
  }
}
function cekwin() {
  var res = false;
  if (countAll == 3) {
    if (playerO) {
      alert("Player O Wins.");
      var score = parseInt($("#scoreO").html());
      if (isNaN(score)) score = 0;
      score++;
      $("#scoreO").html(score);
    } else {
      alert("Player X Wins.");
      var score = parseInt($("#scoreX").html());
      if (isNaN(score)) score = 0;
      score++;
      $("#scoreX").html(score);
    }
    setTimeout(() => {
      $(".tombol input").val("");
    }, 1000);

    game = !game;
    playerO = game;
    res = true;
  }
  return res;
}

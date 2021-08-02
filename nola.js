setTimeout(time, 4000);

function time() {
  alert("Welcome to The Nola");
}

$(document).ready(function () {
  $("#hide").click(function () {
    $("p").hide();
  });
  $("#show").click(function () {
    $("p").show();
  });
});

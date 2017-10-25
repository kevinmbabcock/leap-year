var leapYear = function(year) {
  if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userYear = parseInt($("#userYear").val());
    var result = leapYear(userYear);
    $(".year").text(userYear);

    if (!result)  {
      $(".not").text("not")
    } else {
      $(".not").text("")
    };
    $(".result").show();
  });
});

$(document).ready(function () {
  $("#login_btn").click(function (e) {
    $("html, body").animate({ scrollTop: 0 }, "normal");
    $(".login_form").css("display", "block");
    $("#page-mask").fadeIn("fast").css("display", "block");
  });
});

$(document).ready(function () {
  $("#page-mask").click(function (e) {
    $(".login_form").css("display", "none");
    $("#page-mask").css("display", "none");
  });
});

var loginStatus = "";

if (loginStatus == "try_again" && loginStatus !== "") {
  $(".login_form").css("display", "block");
  $("#page-mask").css("display", "block");
  $("#error_msg").css("opacity", "1");
}

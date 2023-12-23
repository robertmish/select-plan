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

$(document).ready(function () {
  $("#basic").click(function (e) {
    $("#basic").css("border", "1px solid blue");
  });
});

$(document).ready(function () {
  $("#basic").click(function (e) {
    $("#selected_plan").val("Basic");
    $("#basic").css("border", "1px solid blue");
    $("#standard").css("border", "1px solid #dedede");
    $("#premium").css("border", "1px solid #dedede");
  });
});

$(document).ready(function () {
  $("#standard").click(function (e) {
    $("#selected_plan").val("Standard");
    $("#standard").css("border", "1px solid blue");
    $("#basic").css("border", "1px solid #dedede");
    $("#premium").css("border", "1px solid #dedede");
  });
});

$(document).ready(function () {
  $("#premium").click(function (e) {
    $("#selected_plan").val("Premium");
    $("#premium").css("border", "1px solid blue");
    $("#standard").css("border", "1px solid #dedede");
    $("#basic").css("border", "1px solid #dedede");
  });
});

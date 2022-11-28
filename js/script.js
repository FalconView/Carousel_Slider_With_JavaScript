$("input").keypress(function () {
  if ($(this).val().length > 1) {
    $(this).addClass("active");
  }
});

$(document).ready(function () {
  $(".header__burger").click(function (event) {
    $(".header__burger,.header__decorative-container").toggleClass("active");
    $(".header__burger,.header__nav").toggleClass("active");
    $(".header__burger,header__button-item1").toggleClass("active");
    $("body").toggleClass("lock");
  });
});

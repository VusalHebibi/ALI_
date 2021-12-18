$(function () {
  //   $(document).on("click", ".card_header", function () {
  //     $(this).next().slideToggle();
  //   });

  let check = true;
  $(document).on("click", ".card_header", function () {
    if (check) {
      if ($(".active")[0] != $(this).next()[0]) {
        check = false;
        $(".active").slideUp(500, function () {
          $(this).removeClass("active");
        });
        $(this)
          .next()
          .slideDown(500, function () {
            $(this).addClass("active");
            check = true;
          });
      } else {
        check = false;
        $(".active").slideUp(500, function () {
          $(this).removeClass("active");
          check = true;
        });
      }
    }
  });
});

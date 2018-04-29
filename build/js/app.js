$(document ).ready(function() {

  $(".product__card").click(function() {
    if (!$(this).hasClass("product__card_selected")) {
      $(this).addClass("product__card_selected");
    }
    else {
      $(this).removeClass("product__card_selected");
      $(this).removeClass("product__card_selected_hover");
    }
  });

  $(".product__card").mouseleave(function() {
    if ($(this).hasClass("product__card_selected")) {
      $(this).addClass("product__card_selected_hover");
    }
  });

  $(".product__link").click(function(e) {
    e.preventDefault();
    if (!$(this).parent().parent().prev().hasClass("product__card_selected")) {
      $(this).parent().parent().prev().addClass("product__card_selected");
    }
  });

});

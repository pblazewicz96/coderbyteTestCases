(function (doc) {
  $(".inline-bold-1 p").wrapInner("<strong></strong>");
  $(".inline-bold-2 span").wrapInner("<strong></strong>");
  $(".inline-bold-2 a").wrapInner("<strong></strong>");
  $(".inline-bold-3 em").wrapInner("<strong></strong>");
  $(".inline-bold-3 span").wrapInner("<strong></strong>");
  $(".inline-bold-3 ul li p").wrapInner("<strong></strong>");
  $(".inline-bold-3 ul li").slice(-2).wrapInner("<strong></strong>");
})(document);

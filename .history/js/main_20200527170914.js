$(document).ready(function(){
	$(".catalog-btn").click(function(){
		var catalog_menu_wrap = $(".catalog-menu-wrap");
		if (catalog_menu_wrap.hasClass("active")) {
			catalog_menu_wrap.removeClass("active");

		} else {
			catalog_menu_wrap.addClass("active");
		}
	})
});
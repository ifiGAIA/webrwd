$(document).ready(function(){
    let $ul = $(".nav_list"),
    $menu = $(".nav_menu");

    $($menu).click(function(){
        $ul.toggleClass("menu-click");
        console.log("aa");
    });
});


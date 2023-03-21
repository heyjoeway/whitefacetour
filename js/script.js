$(function() {
    function openSidebar() {
        $("#sidebar").addClass("open");

        setTimeout(function() {
            $(window).on("click.sidebar", function() {
                $("#sidebar").removeClass("open");
                $(window).off("click.sidebar");
            });
        }, 1);
    }

    $("#navbar-menu").click(openSidebar);

    function updateNavbar() {
        var scrolled = $(window).scrollTop() > 8;
        var wide = $(window).width() > 1440;

        if (scrolled && !wide) $("#navbar").addClass("over");
        else $("#navbar").removeClass("over"); 
    }

    $(window).scroll(updateNavbar);
    $(window).resize(updateNavbar);
    updateNavbar();
});
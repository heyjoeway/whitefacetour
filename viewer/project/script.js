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
});
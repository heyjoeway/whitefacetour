$(function() {
    let eSidebar = document.getElementById("sidebar");
    let eNavbarMenu = document.getElementById("navbar-menu");

    function openSidebar() {
        eSidebar.classList.add("open");
        
        setTimeout(function() {
            window.addEventListener("click", function() {
                eSidebar.classList.remove("open");
                window.removeEventListener("click", arguments.callee);
            });
        }, 1);
    }

    eNavbarMenu.addEventListener("click", openSidebar);

    function updateNavbar() {
        var scrolled = window.scrollY > 8;
        var wide = window.innerWidth > 1440;

        if (scrolled && !wide) eNavbar.classList.add("over");
        else eNavbar.classList.remove("over");
    }

    window.addEventListener("scroll", updateNavbar);
    window.addEventListener("resize", updateNavbar);

    updateNavbar();
});
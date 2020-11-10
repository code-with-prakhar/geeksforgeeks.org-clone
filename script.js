function toggleLeftMenu() {
    document.getElementsByClassName("toggle--left--menu")[0].classList.toggle("show--left--menu");
}

window.onclick = function(event) {
    if (!event.target.matches('.fa-bars')) {
        var dropdowns = document.getElementsByClassName("toggle--left--menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show--left--menu')) {
                openDropdown.classList.remove('show--left--menu');
            }
        }
    }
}
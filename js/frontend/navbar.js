/* --- Navbar Scroll---*/
window.addEventListener("scroll", function () {
    var navbarContainer = document.getElementById("navbarContainer");
    if (window.scrollY > 0) {
        navbarContainer.classList.add("solid-nav");
    } else {
        navbarContainer.classList.remove("solid-nav");
    }
});

/* --- Dropdown LI Click---*/
document.addEventListener("DOMContentLoaded", function () {
    var dropdownItems = document.querySelectorAll(".dropdown-item");

    dropdownItems.forEach(function (item) {
        item.addEventListener("click", function (event) {
            var link = event.currentTarget.querySelector("a");
            if (link) {
                link.click();
            }
        });
    });
});

/* --- Dropdown Spaceing--*/
window.addEventListener("scroll", function () {
    var dropdownMenu = document.querySelector(".navbar-expand-lg .navbar-nav .dropdown-menu");

    if (this.window.scrollY === 0) {
        if (window.innerWidth <= 991) {
            dropdownMenu.style.setProperty("left", "0", "important");
        } else if (window.innerWidth <= 1200) {
            dropdownMenu.style.setProperty("left", "2%", "important");
        } else if (window.innerWidth <= 1341) {
            dropdownMenu.style.setProperty("left", "0.3%", "important");
        } else if (window.innerWidth <= 1600) {
            dropdownMenu.style.setProperty("left", "0.5%", "important");
        } else if (window.innerWidth <= 1800) {
            dropdownMenu.style.setProperty("left", "1%", "important");
        } else if (window.innerWidth <= 1920) {
            dropdownMenu.style.setProperty("left", "-0.5%", "important");
        } else if (window.innerWidth <= 2019) {
            dropdownMenu.style.setProperty("left", "0", "important");
        } else if (window.innerWidth <= 2128) {
            dropdownMenu.style.setProperty("left", "3%", "important");
        } else if (window.innerWidth <= 2279) {
            dropdownMenu.style.setProperty("left", "10%", "important");
        } else if (window.innerWidth <= 2559) {
            dropdownMenu.style.setProperty("left", "15%", "important");
        } else if (window.innerWidth >= 2560) {
            dropdownMenu.style.setProperty("left", "15%", "important");
        }
    } else {
        if (window.innerWidth <= 991) {
            dropdownMenu.style.setProperty("left", "0", "important");
        } else if (window.innerWidth <= 1200) {
            dropdownMenu.style.setProperty("left", "13%", "important");
        } else if (window.innerWidth <= 1341) {
            dropdownMenu.style.setProperty("left", "13%", "important");
        } else if (window.innerWidth <= 1600) {
            dropdownMenu.style.setProperty("left", "16%", "important");
        } else if (window.innerWidth <= 1800) {
            dropdownMenu.style.setProperty("left", "17%", "important");
        } else if (window.innerWidth <= 1920) {
            dropdownMenu.style.setProperty("left", "16.5%", "important");
        } else if (window.innerWidth <= 2019) {
            dropdownMenu.style.setProperty("left", "16%", "important");
        } else if (window.innerWidth <= 2128) {
            dropdownMenu.style.setProperty("left", "18%", "important");
        } else if (window.innerWidth <= 2279) {
            dropdownMenu.style.setProperty("left", "23%", "important");
        } else if (window.innerWidth <= 2559) {
            dropdownMenu.style.setProperty("left", "26%", "important");
        } else if (window.innerWidth >= 2560) {
            dropdownMenu.style.setProperty("left", "26%", "important");
        }
    }
});

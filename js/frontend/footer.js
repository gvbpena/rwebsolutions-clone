document.addEventListener("DOMContentLoaded", function () {
    var footerContainer = document.querySelector(".footer-container");

    function switchFooter() {
        var threshold = 300;

        var distanceFromBottom = document.documentElement.scrollHeight - (window.scrollY + window.innerHeight);

        if (distanceFromBottom < threshold) {
            footerContainer.classList.remove("footer-container");
            footerContainer.classList.add("footer-container-solid");
        } else {
            footerContainer.classList.remove("footer-container-solid");
            footerContainer.classList.add("footer-container");
        }
    }

    switchFooter();

    window.addEventListener("scroll", function () {
        switchFooter();
    });
});

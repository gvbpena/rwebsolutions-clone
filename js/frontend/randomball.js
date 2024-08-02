document.addEventListener("DOMContentLoaded", function () {
    var container = document.getElementById("firefly-container");
    var numFireflies = 50;

    var color1 = "#f66d10";
    var color2 = "#1f2835";

    function createFirefly() {
        var firefly = document.createElement("div");
        firefly.classList.add("firefly");
        container.appendChild(firefly);

        var size = Math.random() * 15;
        var x = Math.random() * window.innerWidth;
        var y = Math.random() * window.innerHeight;
        var fadeInDuration = Math.random() * 1 + 0.5;
        var fadeOutDuration = Math.random() * 1 + 0.5;
        var speedX = (Math.random() - 0.5) * 2;
        var speedY = (Math.random() - 0.5) * 2;
        var color = Math.random() < 0.5 ? color1 : color2;

        firefly.style.width = size + "px";
        firefly.style.height = size + "px";
        firefly.style.left = x + "px";
        firefly.style.top = y + "px";
        firefly.style.opacity = 0;
        firefly.style.backgroundColor = color;

        fadeIn(firefly, fadeInDuration);
        moveFirefly(firefly, speedX, speedY);
        setTimeout(() => {
            fadeOut(firefly, fadeOutDuration);
            setTimeout(() => {
                fadeIn(firefly, fadeInDuration);
            }, (fadeOutDuration + Math.random() * 2) * 1000);
        }, (fadeInDuration + Math.random() * 2) * 1000);
    }

    function fadeIn(element, duration) {
        element.style.opacity = 0;
        let start = null;
        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            element.style.opacity = progress / (duration * 1000);
            if (progress < duration * 1000) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }

    function fadeOut(element, duration) {
        let start = null;
        function step(timestamp) {
            if (!start) start = timestamp;
            var progress = timestamp - start;
            element.style.opacity = 1 - progress / (duration * 1000);
            if (progress < duration * 1000) {
                window.requestAnimationFrame(step);
            }
        }
        window.requestAnimationFrame(step);
    }

    function moveFirefly(element, speedX, speedY) {
        function resetPosition() {
            posX = Math.random() * window.innerWidth;
            posY = Math.random() * container.clientHeight;
        }

        let posX = parseFloat(element.style.left);
        let posY = parseFloat(element.style.top);

        function move() {
            posX += speedX;
            posY += speedY;

            if (posX < -50 || posX > window.innerWidth + 50 || posY < -50 || posY > container.clientHeight + 50) {
                resetPosition();
            }

            element.style.left = posX + "px";
            element.style.top = posY + "px";

            requestAnimationFrame(move);
        }

        requestAnimationFrame(move);
    }

    for (let i = 0; i < numFireflies; i++) {
        createFirefly();
    }
});

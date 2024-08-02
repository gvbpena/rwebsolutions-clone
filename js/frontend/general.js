// Website Title
var originalTitle = document.title;
var newTitle = "😢 Come back here!";
var titleInterval;

function startTitleChange() {
    titleInterval = setInterval(() => {
        document.title = document.title === originalTitle ? newTitle : originalTitle;
    }, 2000);
}

function stopTitleChange() {
    clearInterval(titleInterval);
    document.title = originalTitle;
}

document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        startTitleChange();
    } else {
        stopTitleChange();
    }
});

if (document.hidden) {
    startTitleChange();
} else {
    stopTitleChange();
}

//Footer Hide In Contact
document.addEventListener("DOMContentLoaded", function () {
    if (window.location.pathname.includes("contact")) {
        document.querySelector("footer").style.display = "none";
    }
});

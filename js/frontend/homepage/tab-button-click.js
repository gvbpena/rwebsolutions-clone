document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('.work-button');
    buttons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            window.location.href = event.currentTarget.href;
        });
    });
});

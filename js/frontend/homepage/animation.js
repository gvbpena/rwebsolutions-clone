document.addEventListener("DOMContentLoaded", () => {
    const selectors = [
        ".main-image-banner",
        ".main-left-box",
        ".main-right-box",
        ".slider-container",
        ".main-title-container",
        ".title-left-container",
        ".title-right-container",
        ".process-container",
        ".third-image-banner",
        ".third-left-container",
        ".carousel-box",
        ".fourth-title",
        ".fourth-link-box",
        ".fourth-image-banner",
        ".tab-pane-left-1",
        ".tab-pane-right-1",
        ".tab-pane-left-2",
        ".tab-pane-right-2",
        ".tab-pane-left-3",
        ".tab-pane-right-3",
        ".tab-pane-left-4",
        ".tab-pane-right-4",
        ".stick-container",
        ".blog-box",
    ];

    const elements = selectors.map((selector) => document.querySelector(selector)).filter((el) => el);

    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const observerCallback = (entries) => {
        entries.forEach((entry) => {
            entry.target.classList.toggle("visible", entry.isIntersecting);
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    elements.forEach((element) => observer.observe(element));
});

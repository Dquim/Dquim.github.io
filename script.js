// Function to check if any part of an element is in the viewport
function isAnyPartInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0 &&
        rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
        rect.right >= 0
    );
}

// Function to handle scroll event
function handleScroll() {
    var sections = document.querySelectorAll('.section');
    var footer = document.querySelector('footer');

    // Check each section
    sections.forEach(function(section) {
        if (isAnyPartInViewport(section)) {
            // Set opacity to 1 if any part of the section is in the viewport
            section.style.opacity = 1;
        } else {
            // Set opacity to 0 if section is not in the viewport
            section.style.opacity = 0;
        }
    });

    // Check the footer
    if (isAnyPartInViewport(footer)) {
        // Set opacity to 1 if any part of the footer is in the viewport
        footer.style.opacity = 1;
    } else {
        // Set opacity to 0 if footer is not in the viewport
        footer.style.opacity = 0;
    }
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger handleScroll on page load
window.addEventListener('load', handleScroll);

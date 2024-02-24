function smoothScroll(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Get the target section ID from the href attribute of the clicked link
    const targetId = event.target.getAttribute('href').substring(1);

    // Scroll smoothly to the top of the page when the logo is clicked
    if (targetId === 'navigation' || event.target.classList.contains('logo')) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    } else {
        // Otherwise, scroll to the target section
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
}

    document.addEventListener('DOMContentLoaded', function() {
    // Get all navigation links
    let navLinks = document.querySelectorAll('.nav-btn, .logo a'); // Include the logo anchor link

    // Iterate over each link
    navLinks.forEach(function(link) {
        // Add click event listener
        link.addEventListener('click', smoothScroll);
    });

    // Get all sidebar links
    let sidebarLinks = document.querySelectorAll('.nav-btn-side');

    // Iterate over each link
    sidebarLinks.forEach(function(link) {
        // Add click event listener
        link.addEventListener('click', hideSidebar);
    });
});

function showSidebar() {
    const navOverlay = document.querySelector('.nav-overlay');
    // navOverlay.style.display = 'flex';
    navOverlay.classList.toggle('active');
}

function hideSidebar(event) {
    event.preventDefault(); // Prevent the default behavior of the link
    const navOverlay = document.querySelector('.nav-overlay');
    // navOverlay.style.display = 'none';
    navOverlay.classList.toggle('active');

    // Get the target section ID from the href attribute of the clicked button
    const targetId = event.target.getAttribute('href').substring(1);

    // Scroll smoothly to the target section
    if (targetId === 'navigation') {
        // If target is 'navigation', scroll to the top of the page
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
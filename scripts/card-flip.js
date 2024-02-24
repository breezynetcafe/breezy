document.addEventListener('DOMContentLoaded', function() {
    let onlineServicesFrames = document.querySelectorAll('.online-services-frame');

    // Function to handle the click event and flip the card
    function flipCard(event) {
        // Toggle the flipped class for the clicked element
        this.classList.toggle('flipped');
    }

    // Attach click event listeners to each .online-services-frame element
    onlineServicesFrames.forEach(function(frame) {
        frame.addEventListener('click', flipCard);
    });
});
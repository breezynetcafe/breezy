document.addEventListener('DOMContentLoaded', function() {
    // Get the title element
    var titleElement = document.querySelector('title');
    // Get the site title span element
    var siteTitleSpan = document.querySelector('.site-title');
    // Get the current year span element
    var currentYearSpan = document.querySelector('.current-year');

    // Update the content of the site title span with the content of the title element
    siteTitleSpan.textContent = titleElement.textContent;

    // Get the current year
    var currentYear = new Date().getFullYear();
    // Update the content of the current year span with the current year
    currentYearSpan.textContent = currentYear;
});

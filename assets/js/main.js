document.addEventListener("DOMContentLoaded", function() {
    // Check if the current page is in the 'articles' directory
    const isArticlePage = window.location.pathname.includes('/articles/');

    // Define paths based on the page location
    const headerPath = isArticlePage ? '../_header.html' : '_header.html';
    const linkPrefix = isArticlePage ? '../' : '';

    fetch(headerPath)
        .then(response => response.text())
        .then(html => {
            // Create a temporary container to parse the header HTML
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            // Adjust links and image sources if on an article page
            if (isArticlePage) {
                const links = tempDiv.querySelectorAll('a');
                links.forEach(link => {
                    const href = link.getAttribute('href');
                    // Only prepend prefix to relative links, not external ones or anchors
                    if (href && !href.startsWith('http') && !href.startsWith('#')) {
                        link.setAttribute('href', linkPrefix + href);
                    }
                });
            }

            // Inject the (potentially modified) header
            document.body.insertAdjacentHTML('afterbegin', tempDiv.innerHTML);

            // Initialize mobile menu logic
            const mobileMenuButton = document.getElementById('mobile-menu-button');
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileMenuButton && mobileMenu) {
                mobileMenuButton.addEventListener('click', () => {
                    mobileMenu.classList.toggle('hidden');
                });
            }
        })
        .catch(error => console.error('Error fetching header:', error));
});

document.addEventListener("DOMContentLoaded", function() {
    const headerPath = './_header.html';

    fetch(headerPath)
        .then(response => response.text())
        .then(html => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = html;

            document.body.insertAdjacentHTML('afterbegin', tempDiv.innerHTML);

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
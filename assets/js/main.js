document.addEventListener("DOMContentLoaded", function () {
    const headerPath = `${window.location.origin}/AILA_new/_header.html`;

    fetch(headerPath)
        .then(response => {
            if (!response.ok) throw new Error('Header not found');
            return response.text();
        })
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
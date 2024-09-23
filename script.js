window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
});

// Fonction pour afficher ou masquer la sidebar
const toggleSidebar = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

toggleSidebar.addEventListener('click', () => {
    if (sidebar.style.left === '-60px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-60px';
    }
});

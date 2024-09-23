window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    }
});

const toggleSidebar = document.querySelector('.toggle-sidebar');
const sidebar = document.querySelector('.sidebar');

toggleSidebar.addEventListener('click', () => {
    if (sidebar.style.left === '-60px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-60px';
    }
});

function openModal(title, description, imageSrc) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalText").innerText = description;
    document.getElementById("modalImage").src = imageSrc;

    const modal = document.getElementById("characterModal");
    modal.classList.add("show");
}

function closeModal() {
    const modal = document.getElementById("characterModal");
    modal.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM chargé et prêt");
});

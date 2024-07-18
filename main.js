document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Scroll animation for project items
    const projectItems = document.querySelectorAll('.project-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        threshold: 0.1
    });

    projectItems.forEach(item => {
        observer.observe(item);
    });

    // Toggle navigation menu on mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    // Modal functionality for skills
    const skills = document.querySelectorAll('.skills-list li');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            const skillId = skill.getAttribute('data-skill');
            const modal = document.getElementById(skillId);
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            if (modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});

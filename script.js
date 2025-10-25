document.addEventListener('DOMContentLoaded', function() {
    // Hamburger menu functionality
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Toggle menu when clicking hamburger icon
    menu.onclick = (e) => {
        e.stopPropagation(); // Prevent event from bubbling to document
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !navbar.contains(e.target)) {
            menu.classList.remove('bx-x');
            navbar.classList.remove('active');
        }
    });

    // Close menu when clicking on a nav link
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('bx-x');
            navbar.classList.remove('active');
        });
    });

    // Existing dropdown functionality
    const categoryLink = document.querySelector('.navbar li a[href="#catagories"]');
    const dropdown = document.getElementById('categoryDropdown');

    categoryLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor behavior
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.navbar li')) {
            dropdown.style.display = 'none';
        }
    });
});
// Get the profile elements
            const profile = document.querySelector('.profile');
            const profileDropdown = document.getElementById('profileDropdown');

            // Toggle dropdown on click
            profile.addEventListener('click', () => {
                if (profileDropdown.style.display === 'none') {
                    profileDropdown.style.display = 'block';
                } else {
                    profileDropdown.style.display = 'none';
                }
            });
            // Position dropdown below profile
            const profileRect = profile.getBoundingClientRect();
            profileDropdown.style.position = 'absolute';
            profileDropdown.style.top = `${profileRect.bottom}px`;
            profileDropdown.style.left = `${profileRect.left}px`;
            // Close dropdown when clicking outside
            document.addEventListener('click', (e) => {
                if (!profile.contains(e.target)) {
                    profileDropdown.style.display = 'none';
                }
            });

            // Login and Signup functionality
            const loginForm = document.getElementById('loginForm');
            const signupForm = document.getElementById('signupForm');

            if (loginForm) {
                loginForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const username = loginForm.querySelector('[name="username"]').value;
                    const password = loginForm.querySelector('[name="password"]').value;
                    // Add your login logic here
                    console.log('Login attempt:', username);
                });
            }
            // Store user data
            let users = [];

            // Update login handler to check stored users
            if (loginForm) {
                loginForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const username = loginForm.querySelector('[name="username"]').value;
                    const password = loginForm.querySelector('[name="password"]').value;
                    
                    const user = users.find(u => u.username === username && u.password === password);
                    // Hardcoded credentials
                    const validEmail = "nidhin@gmail.com";
                    const validPassword = "nidhin@123";

                    if (username === validEmail && password === validPassword) {
                        window.location.href = 'index.html'; // Redirect to home page
                    } else {
                        alert('Invalid username or password');
                    }
                });
            }

            // Update signup handler to store user data
            if (signupForm) {
                signupForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const username = signupForm.querySelector('[name="username"]').value;
                    const email = signupForm.querySelector('[name="email"]').value;
                    const password = signupForm.querySelector('[name="password"]').value;
                    // Add your signup logic here
                    console.log('Signup attempt:', username, email);
                });
            }
            

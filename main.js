document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');
    const navLinks = document.querySelectorAll('.mobile-nav a');  // Select all anchor tags in mobile nav

    // Ensure the mobile navigation is initially hidden
    mobileNav.style.display = 'none';

    // Toggle mobile menu visibility on hamburger click
    hamburgerMenu.addEventListener('click', function () {
        if (mobileNav.style.display === 'block') {
            mobileNav.style.display = 'none';
        } else {
            mobileNav.style.display = 'block';
        }
    });

    // Close the mobile navigation when any nav link is clicked
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            mobileNav.style.display = 'none';  // Hide the mobile nav when link is clicked
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.getElementById("logo-index");
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50 && logo.id === "logo-index") {
        logo.id = "logo"; // Change the ID to the smaller logo style
      } else if (window.scrollY <= 50 && logo.id === "logo") {
        logo.id = "logo-index"; // Revert back to the larger logo style
      }
    });
  });
  
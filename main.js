document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.getElementById('hamburger-menu');
  const mobileNav = document.getElementById('mobile-nav');
  const navLinks = document.querySelectorAll('.mobile-nav a');  // Select all anchor tags in mobile nav

  // Toggle mobile menu visibility on hamburger click
  hamburgerMenu.addEventListener('click', function () {
      mobileNav.classList.toggle('active');  // Toggle the 'active' class to show/hide the menu
  });

  // Close the mobile navigation when any nav link is clicked
  navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          mobileNav.classList.remove('active');  // Remove the 'active' class to hide the menu
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


function handleLogoSwitch() {
    const logo = document.getElementById('logo-index') || document.getElementById('logo');
    const screenWidth = window.innerWidth;
    const isIndexPage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/';

    if (isIndexPage) {
        if (screenWidth <= 1024) { // Adjust breakpoint as needed
            if (logo && logo.id === 'logo-index') {
                logo.id = 'logo';
            }
        } else {
            if (logo && logo.id === 'logo') {
                logo.id = 'logo-index';
            }
        }
    } else {
        // For other pages, always ensure the logo uses #logo
        if (logo && logo.id !== 'logo') {
            logo.id = 'logo';
        }
    }
}

// Listen for window resize
window.addEventListener('resize', handleLogoSwitch);

// Initial check when the page loads
document.addEventListener('DOMContentLoaded', handleLogoSwitch);

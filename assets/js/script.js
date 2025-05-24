document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav.custom-navbar');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.custom-nav-link');

  // Hamburger toggle
  menuToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Scroll behavior
  let lastScroll = window.pageYOffset;
  const scrollThreshold = 50;

  function handleScroll() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > scrollThreshold) {
      nav.classList.add('nav-glass');
    } else {
      nav.classList.remove('nav-glass');
    }

    if (!navLinks.classList.contains('active')) {
      if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        nav.classList.add('scrolled-hide');
      } else {
        nav.classList.remove('scrolled-hide');
      }
    }

    lastScroll = currentScroll;
  }

  // Jalankan saat halaman pertama kali dimuat
  handleScroll();

  // Tambahkan event scroll
  window.addEventListener('scroll', handleScroll);

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetEl = document.querySelector(this.getAttribute('href'));
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }

      if (navLinks.classList.contains('active')) {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
});


// LOGO CLIENT SROUSEL

var copy = document.querySelector(".logos-slide").cloneNode(true);
document.querySelector(".logos").appendChild(copy);
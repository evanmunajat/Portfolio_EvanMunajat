  // Ambil semua link menu
  const navLinks = document.querySelectorAll(".custom-nav-link a");

  // Fungsi untuk remove active dari semua
  function removeActive() {
    navLinks.forEach(link => {
      link.classList.remove("active");
    });
  }

  // Tambahin event click ke tiap link
  navLinks.forEach(link => {
    link.addEventListener("click", function() {
      removeActive();
      this.classList.add("active");
    });
  });

  // BONUS: Active saat scroll ke section
  const sections = document.querySelectorAll("section");

  window.addEventListener("scroll", function() {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    removeActive();
    navLinks.forEach(link => {
      if (link.getAttribute("href") === "#" + current) {
        link.classList.add("active");
      }
    });
  });




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


// MENU BAR PORTOFOLIO 

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;

    // Active state
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Filter logic
    projectCards.forEach((card) => {
      const category = card.dataset.category;

      if (filter === "all" || category === filter) {
        card.hidden = false;
      } else {
        card.hidden = true;
      }
    });

    // FIX AOS BUG (WAJIB)
    if (window.AOS) {
      AOS.refreshHard();
    }
  });
});

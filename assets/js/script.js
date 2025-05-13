document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-link');

  // Hamburger menu toggle
  menuToggle.addEventListener('click', function () {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Scroll behavior
  let lastScroll = 0;
  const scrollThreshold = 50;

  window.addEventListener('scroll', function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > scrollThreshold) {
      nav.classList.add('nav-glass');
    } else {
      nav.classList.remove('nav-glass');
    }

    // Optional: Hide/show nav based on scroll direction
    if (!navLinks.classList.contains('active')) {
      if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        nav.style.transform = `translateY(-100%)`;
      } else {
        nav.style.transform = 'translateY(0)';
      }
    }

    lastScroll = currentScroll;
  });
});


// OPEN BUTTON SCROLL
// Menampilkan tombol ketika scroll ke bawah
window.onscroll = function() {
  const button = document.querySelector('.scroll-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      button.style.display = 'block';  // Menampilkan tombol jika scroll lebih dari 100px
  } else {
      button.style.display = 'none';   // Menyembunyikan tombol jika scroll kurang dari 100px
  }
};

// Fungsi untuk menggulirkan halaman kembali ke atas
function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Efek scroll halus
  });
}

// JavaScript untuk memberikan efek scroll dengan kecepatan tertentu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',  // Smooth scroll
      block: 'start'       // Atur posisi scroll di bagian atas
    });
  });
});

// SCRIP MENU PORTFOLIO
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Hapus class active dari semua tombol
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      portfolioItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.classList.remove('hide');
        } else {
          item.classList.add('hide');
        }
      });
    });
  });
});


// OPEN CASE STUDY
document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll('.cs-fade');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('cs-visible');
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => observer.observe(el));
});

// 
function countUp(id, target, suffix = "", speed = 100) {
  const element = document.getElementById(id);
  let count = 0;

  const interval = setInterval(() => {
    element.textContent = count;
    count++;
    if (count > target) {
      clearInterval(interval);
      element.textContent = target + suffix;
    }
  }, speed);
}

// Observer untuk memantau elemen muncul di viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp("weeks", 10);
      countUp("screens", 30, "+");
      observer.unobserve(entry.target); // agar tidak terulang terus
    }
  });
}, {
  threshold: 0.5 // 50% elemen harus terlihat
});

// Pantau elemen .project-duration
window.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("projectDuration");
  if (section) observer.observe(section);
});
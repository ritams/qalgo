/**
 * Quantum Algorithms Workshop
 * Minimal, professional interactions
 */

(function () {
  'use strict';

  // ---------- Intersection Observer for Fade-in ----------
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeInObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  function initFadeAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => fadeInObserver.observe(el));
  }

  // ---------- Navbar Scroll Effect ----------
  function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // ---------- Mobile Menu ----------
  function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!menuToggle || !mobileMenu) return;

    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }

  // ---------- Smooth Scroll ----------
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // ---------- Dynamic Brand Spacing ----------
  function initBrand() {
    const brandSub = document.querySelector('.brand-sub');
    if (!brandSub) return;

    const text = brandSub.textContent.trim();
    // Wrap each character in a span to allow flex justification
    brandSub.innerHTML = [...text].map(char => `<span>${char}</span>`).join('');
  }

  // ---------- Email Copy Logic ----------
  function initEmailCopy() {
    const copyBtns = document.querySelectorAll('.copy-email-btn');

    copyBtns.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const email = this.getAttribute('data-email');
        const tooltip = this.querySelector('.copy-tooltip');

        navigator.clipboard.writeText(email).then(() => {
          const originalText = tooltip.textContent;
          tooltip.textContent = 'Copied!';
          this.classList.add('copied');

          setTimeout(() => {
            tooltip.textContent = originalText;
            this.classList.remove('copied');
          }, 2000);
        });
      });
    });
  }

  // ---------- Initialize ----------
  document.addEventListener('DOMContentLoaded', function () {
    initBrand();
    initFadeAnimations();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
    initEmailCopy();
  });

})();

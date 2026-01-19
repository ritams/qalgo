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

  // ---------- Dynamic Typography ----------
  function initDynamicTypography() {
    const brandSub = document.querySelector('.brand-sub');
    if (!brandSub) return;

    const text = brandSub.textContent.trim();
    brandSub.textContent = '';
    
    [...text].forEach(char => {
      const span = document.createElement('span');
      span.textContent = char;
      brandSub.appendChild(span);
    });
  }

  // ---------- Initialize ----------
  document.addEventListener('DOMContentLoaded', function () {
    initDynamicTypography();
    initFadeAnimations();
    initNavbar();
    initMobileMenu();
    initSmoothScroll();
  });

})();

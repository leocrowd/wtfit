document.addEventListener("DOMContentLoaded", function () {
  // --- Hamburger Menu Toggle ---
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("is-active");
    mobileMenu.classList.toggle("active");
  });

  // Fecha o menu mobile quando um link é clicado
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("is-active");
      mobileMenu.classList.remove("active");
    });
  });

  // --- Scroll to Top Button ---
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Mostra/oculta o botão
  window.onscroll = function () {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  // Rola para o topo ao clicar
  scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // --- Smooth scrolling for all anchor links ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      // Previne o salto imediato apenas para links de âncora
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  // --- Scroll Reveal Animations ---
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Adiciona delay se especificado no HTML (data-delay)
          const delay = entry.target.dataset.delay;
          if (delay) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, parseInt(delay));
          } else {
            entry.target.classList.add("visible");
          }
          // Para de observar o elemento após a animação
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null, // viewport
      threshold: 0.1, // 10% do elemento visível
      rootMargin: "0px",
    }
  );

  revealElements.forEach((el) => {
    observer.observe(el);
  });
});
